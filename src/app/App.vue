<script setup lang="ts">

import '@/app/styles/style.css'
import MainPage from '@/pages/main/mainPage.vue'
import * as styles from './style.css'

</script>

<template>
  <main :class="styles.main">
    <MainPage />
    </main>
</template>