<script setup lang="ts">
import * as styles from './style.css'
defineProps<{ content: string; loading: boolean }>()
</script>

<template>
  <div :class="styles.previewCard">
    <textarea v-if="!loading" :value="content" readonly :class="styles.resultTextarea" />
    <div v-else>텍스트 분석 중...</div>
  </div>
</template>