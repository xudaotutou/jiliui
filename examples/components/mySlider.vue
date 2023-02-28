<script setup lang="ts">
import { ref } from 'vue'
import JSliderBase from '../../packages/components/slider'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(0)
const value5 = ref(0)
</script>

<template>
  <h1>Slider组件</h1>
  <h2>Default</h2>
  <JSliderBase v-model="value1"/>
  <h2>step=20</h2>
  <JSliderBase v-model="value2" :step="20" />
  <h2>No tooltip</h2>
  <JSliderBase v-model="value3" :show-tooltip="false" />
  <h2>input</h2>
  <JSliderBase v-model="value4" show-input />
  <h2>min=20, max=300</h2>
  <JSliderBase
    :min="20"
    :max="300"
    v-model="value5"
  />
</template>

<style scoped>

</style>
