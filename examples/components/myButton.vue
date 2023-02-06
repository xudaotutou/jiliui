<script setup lang='ts'>
import mybutton from '../../packages/components/buttons/index'
defineProps<{ msg: string }>()
</script>

<template>
  <div>
    <h1>Button组件</h1>
    <mybutton />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
