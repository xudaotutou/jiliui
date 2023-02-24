<script setup lang="ts">
withDefaults(defineProps<{
  top?:number,
}>(), {
  top: 90
})

</script>
<template>
  <div class="pointer-events-none absolute h-full">
    <a
      href="#top"
      class="pointer-events-auto sticky  mt-[100vh] inline-block"
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
</style>
