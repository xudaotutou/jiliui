<script setup lang="ts">
import JRProgress from '~/components/rprogress/src/JRProgress.vue'
import JProgress from '~/components/progress/src/JProgress.vue'
</script>

<template>
  <JRProgress
    :value="70"
  >
    70%
  </JRProgress>
  <JProgress
    :max="100"
  />
</template>
