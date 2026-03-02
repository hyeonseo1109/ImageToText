<script setup lang="ts">
import * as styles from './style.css'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<template>
  <button 
    :type="type" 
    :class="styles.button" 
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>