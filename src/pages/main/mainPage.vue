<script setup lang="ts">

import '@/app/styles/style.css'
import { OcrView } from '@/features/copy-text/ui'
import * as styles from './style.css'
</script>

<template>
<div :class="styles.container">
  <OcrView />
</div>
</template>