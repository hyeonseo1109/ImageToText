<script setup lang="ts">
import { useOcr } from '@/features/change-text/model'
import * as styles from './style.css'

const { ocrResult, isLoading, isCopied, processImage, copyToClipboard } = useOcr()

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files[0]) {
    processImage(target.files[0])
  }
}
</script>

<template>
  <div :class="styles.container">
    <h1 :class="styles.title">이미지 텍스트 추출기</h1>

    <div :class="styles.uploadSection">
      <label :class="styles.fileLabel">
        <span>{{ isLoading ? '분석 중...' : '이미지 선택하기' }}</span>
        <input 
          type="file" 
          accept="image/*" 
          @change="handleFileChange" 
          :disabled="isLoading"
          :class="styles.hiddenInput"
        />
      </label>
    </div>

    <div v-if="isLoading" :class="styles.loadingText">
      Google Vision API가 글자를 읽고 있습니다...
    </div>

    <div v-if="ocrResult" :class="styles.resultSection">
      <div :class="styles.resultHeader">
        <span :class="styles.resultLabel">추출된 결과</span>
        <button 
          @click="copyToClipboard" 
          :class="[styles.copyButton, isCopied && styles.copySuccess]"
        >
          {{ isCopied ? ' 복사 완료' : ' 클립보드 복사' }}
        </button>
      </div>
      
      <div :class="styles.resultContent">
        {{ ocrResult }}
      </div>
    </div>
  </div>
</template>