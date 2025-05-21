<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
}>()
</script>

<template>
  <button :type="type || 'button'" :class="[
    'px-8 py-3 rounded-full transition-all duration-300 shadow-lg',
    variant === 'primary'
      ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-primary/50 hover:scale-105'
      : 'bg-white/10 hover:bg-white/20 text-white hover:scale-105'
  ]">
    <slot />
  </button>
</template>