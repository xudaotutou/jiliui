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
  >
    70
  </progress>
</template>

<style lang="postcss">

.jili-progress {
    @apply bg-blue-100 appearance-none rounded-full;
    --content-col: blue;
    --bg-col: grey;
    &::-webkit-progress-bar,
    &::-moz-progress-bar {
      @apply rounded-full;
      background-color: var(--bg-col);
    }
    &::-webkit-progress-value {
      @apply rounded-full;
      background-color: var(--content-col);
    }
    &:indeterminate {
      width: 80vw;
      height: 20px;
    }
  }
</style>
