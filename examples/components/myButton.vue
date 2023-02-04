<script setup lang="ts">
import myButton from '../../packages/components/buttons'
defineProps<{ msg: string }>()
</script>

<template>
  <h1>Button组件</h1>
  <myButton />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
