import { ref } from 'vue'

const googleUrl = `https://vision.googleapis.com/v1/images:annotate?key=`

export const useOcr = () => {
  const ocrResult = ref('')
  const isLoading = ref(false)

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1]
        resolve(base64String)
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  const processImage = async (file: File) => {
    isLoading.value = true
    ocrResult.value = ''

    try {
      const base64Image = await fileToBase64(file)
      const apiKey = import.meta.env.VITE_GOOGLE_VISION_API_KEY

      const url = `${googleUrl}${apiKey}`

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          requests: [
            {
              image: { content: base64Image },
              features: [{ type: 'TEXT_DETECTION' }]
            }
          ]
        })
      })

      const data = await response.json()

      if (data.responses && data.responses[0].textAnnotations) {
        ocrResult.value = data.responses[0].textAnnotations[0].description
      } else {
        ocrResult.value = '인식된 텍스트가 없습니다.'
      }
    } catch (error) {
      console.error('Google Vision API 에러:', error)
      ocrResult.value = 'OCR 분석 중 오류가 발생했습니다.'
    } finally {
      isLoading.value = false
    }
  }

  return { ocrResult, isLoading, processImage }
}
