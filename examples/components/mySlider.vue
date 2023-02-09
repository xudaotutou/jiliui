<script setup lang="ts">
import JSliderBase from '../../packages/components/slider'

</script>

<template>
  <h1>Slider组件</h1>
  <h2>Default</h2>
  <JSliderBase />
  <h2>step=20</h2>
  <JSliderBase :step="20" />
  <h2>No tooltip</h2>
  <JSliderBase :show-tooltip="false" />
  <h2>No input</h2>
  <JSliderBase :show-input="false" />
  <h2>min=20, max=300</h2>
  <JSliderBase
    :min="20"
    :max="300"
  />
</template>

<style scoped>

</style>
