<script setup lang='ts'>
import JButton from '~/components/buttons/src/JButtonBase.vue'

defineProps<{ msg: string }>()
</script>

<template>
  <h1>Button组件</h1>
  <!-- <JButtonBase /> -->
  <JButton />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
