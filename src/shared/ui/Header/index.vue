<script setup lang="ts">
import * as styles from './style.css'
</script>

<template>
  <h1 
    :class="styles.header" 
  >
    <slot />
  </h1>
</template>