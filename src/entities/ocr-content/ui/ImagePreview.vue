<script setup lang="ts">
import * as styles from './style.css'

interface Props {
  src: string
}

defineProps<Props>()
</script>

<template>
  <div :class="styles.previewCard">
    <img v-if="src" :src="src" alt="OCR Target" :class="styles.previewImage" />
    
    <div v-else>
      <p>분석할 이미지를 업로드해주세요.</p>
    </div>
  </div>
</template>