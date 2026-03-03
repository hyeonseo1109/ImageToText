<script setup lang="ts">

import { useOcr } from '@/features/change-text/model'
import { ref } from 'vue'
import { ResultViewer } from '@/entities/ocr-content/ui'
import { ImagePreview } from '@/entities/ocr-content/ui'
import { UploadButton } from '@/features/change-text/ui'

const { ocrResult, isLoading, processImage } = useOcr()
const previewUrl = ref('')

const handleFile = (file: File) => {
  previewUrl.value = URL.createObjectURL(file)
  processImage(file)
}
</script>

<template>
  <div class="ocr-board">
    <!-- <UploadButton @upload="handleFile" /> -->
    <div class="layout">
      <ImagePreview :src="previewUrl" />
      <ResultViewer :content="ocrResult" :loading="isLoading" />
    </div>
  </div>
</template>