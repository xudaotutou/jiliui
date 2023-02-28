<script setup lang="ts">
import JProgress from '~/components/progress/src/JProgress.vue'
import JRProgress from '~/components/rprogress/src/JRProgress.vue'
</script>

<template>
  <div class="flex">
    <JRProgress
      :value="100"
      :size="20"
      :start="0"
      :end="360"
    >
      100%, <br>{--start: 0; --end:360}(default)
    </JRProgress>
    <JRProgress
      :value="100"
      :size="20"
      :start="30"
      :end="330"
    >
      100%, <br>{--start: 30; --end: 330}
    </JRProgress>    <JRProgress
      :value="100"
      :size="20"
      :start="360"
      :end="0"
    >
      100%, <br>{--start: 360; --end: 0}(negative)
    </JRProgress>
    <JRProgress
      :value="-100"
      :size="20"
      :start="0"
      :end="360"
    >
      -100%(negative), <br>{--start: 0; --end: 360}
    </JRProgress>
  </div>
</template>
