<script setup lang="ts">
withDefaults(defineProps<{
  top?:number,
}>(), {
  top: 90
})

</script>
<template>
  <div class="back-to-top-wrapper">
    <a
      href="#top"
      class="back-to-top"
      :style="{top:`${top}vh`}"
    >
      <slot>
        <span class=" h-10 w-10 bg-blue-400">
          top
        </span>
      </slot>
    </a>
  </div>
</template>
<style lang="postcss">
@media screen and (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
.back-to-top {
  @apply inline-block sticky pointer-events-auto;
  margin-top: 100vh;
  &-wrapper {
  @apply absolute h-full pointer-events-none;
  }
}
</style>
