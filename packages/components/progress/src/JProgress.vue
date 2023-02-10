<script setup lang="ts">
// withDefaults(defineProps<{
//   max?:number
//   value?:number
// }>(), {
//   max: 100,
//   value: 0
// })
</script>

<template>
  <progress
    class="progress"
  />
</template>

<style lang="postcss">

.progress {
    @apply bg-blue-100 appearance-none rounded-full;
    --content-col: blue;
    --bg-col: grey;
    &::-webkit-progress-bar {
      @apply rounded-full;
      background-color: var(--bg-col);
    }
    &::-webkit-progress-value,
    &::-moz-progress-bar {
      @apply rounded-full;
      background-color: var(--content-col);
    }
    &:indeterminate {
      &::-webkit-progress-value,
      &::-moz-progress-bar {
      /* background-color: var(--content-col); */
      @apply w-0;
    }
    }
  }
</style>
