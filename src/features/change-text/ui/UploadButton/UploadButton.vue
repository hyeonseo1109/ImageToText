<script setup lang="ts">
import * as styles from './style.css'

const emit = defineEmits<{
  (e: 'upload', file: File): void
}>()

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    emit('upload', file)
  }
}
</script>

<template>
  <div :class="styles.container">
    <label :class="styles.labelText">이미지 선택</label>
    <input 
      type="file" 
      accept="image/*" 
      @change="onFileChange" 
      :class="styles.inputField"
    />
  </div>
</template>