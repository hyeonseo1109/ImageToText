<script setup lang="ts">

import '@/app/styles/style.css'
// import { OcrBoard } from '@/widgets/ocr-board/ui'
import { OcrView } from '@/features/copy-text/ui'
import * as styles from './style.css'
</script>

<template>
<div :class="styles.container">
  <OcrView />
  <!-- <OcrBoard />  -->
</div>
</template>