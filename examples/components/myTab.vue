<script setup lang="ts">
import JTab from '~/components/tab/src/JTab.vue'
</script>

<template>
  <JTab
    :tab-n="2"
    class=" h-40"
  >
    <template #header-0>
      水果1
    </template>
    <template
      #header-1
    >
      水果2
    </template>
    <template #content-0>
      ctx0
    </template>
    <template
      #content-1
    >
      <div>
        ctx1
      </div>
    </template>
  </JTab>
</template>

<style scoped>

</style>
