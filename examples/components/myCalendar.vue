<script setup lang="ts">
import { ref } from 'vue'
import JCalendar from '~/components/calendar/src/JCalendar.vue'

const value = ref(new Date())
</script>

<template>
  <h1>Calendar组件</h1>
  <JCalendar :value="value" />
</template>

<style scoped>

</style>
