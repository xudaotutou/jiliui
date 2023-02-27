<script setup lang="ts">
import { JTab } from 'jiliui'
</script>

<template>
  <Jtab
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
      <div class="bg-yellow-50">
        ctx1
      </div>
    </template>
  </Jtab>
</template>

<style scoped>

</style>
