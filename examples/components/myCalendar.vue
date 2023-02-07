<script setup lang="ts">
import { ref } from 'vue'
import JCalendarBase from '../../packages/components/calendar'

const value = ref(new Date())
</script>

<template>
  <h1>Calendar组件</h1>
  <JCalendarBase :value="value" />
</template>

<style scoped>

</style>
