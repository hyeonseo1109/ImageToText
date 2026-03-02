import { ref } from 'vue'
import { createWorker } from 'tesseract.js'

export const useOcr = () => {
  const ocrResult = ref('')
  const progress = ref(0)
  const isLoading = ref(false)

  const processImage = async (file: File) => {
    isLoading.value = true
    const worker = await createWorker('kor+eng')
    const text = await (await worker.recognize(file)).data.text
    ocrResult.value = text
    await worker.terminate()
    isLoading.value = false
  }

  return { ocrResult, progress, isLoading, processImage }
}
