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
progress {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
}
.progress {
    @apply appearance-none rounded-full relative overflow-hidden h-1 w-40;
    --content-col: blue;
    --bg-col: grey;
    -webkit-appearance: none;
    background-color: var(--bg-col);
    &::-webkit-progress-bar {
      @apply rounded-full;
      background-color: var(--bg-col);
    }
    &::-moz-progress-bar {
      @apply rounded-full;
      background-color: var(--content-col);
    }
    &::-webkit-progress-value {
    @apply rounded-full;
      background-color: var(--content-col);
    }
    &:indeterminate {
      &::-webkit-progress-value,
      &::-moz-progress-bar {
      @apply w-0;
      /* background-color: var(--content-col); */
      }
      &::before,
      &::after {
        @apply h-full w-1/4 absolute rounded-full;
        content: "";
        background-color: var(--content-col);
      }

      &::before {
        animation: readyload 3s infinite linear;
      }
      &::after {
        @apply  z-10 top-0 w-0;
        animation: readyload2 3s infinite linear;
      }
    }
  }

  @keyframes readyload {
        0% {
          @apply w-1/4 left-0;
        }
        25%{
          @apply w-1/4 left-1/4;
        }
        50%{
          @apply w-1/4 left-2/4;
        }
        75% {
          @apply w-1/4 left-3/4;
        }
        100%{
          @apply w-0 left-full;
        }
      }
      @keyframes readyload2 {
        75% {
          @apply w-0 left-0;
        }
        100%{
          @apply w-1/4 left-0;
        }
      }
</style>
