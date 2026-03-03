<script setup lang="ts">
import Header from '@/shared/ui/Header/index.vue'
import '@/app/styles/style.css'
import { OcrBoard } from '@/widgets/ocr-board/ui'
import { OcrView } from '@/features/copy-text/ui'
</script>

<template>
  <main>

    <Header>OCR 결과 확인</Header>
    <OcrBoard /> 
    <OcrView />
  </main>
</template>