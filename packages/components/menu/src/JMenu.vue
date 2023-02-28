<template>
  <div
    class="jili-menu"
    :style="style"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'

const props = defineProps({
  backgroundColor: {
    type: String,
    require: false,
    default: '#fff'
  },
  textColor: {
    type: String,
    require: false,
    default: '#000'
  },
  activeTextColor: {
    type: String,
    require: false,
    default: '#409eff'
  }
})

const style = computed(() => {
  return {
    '--backgroundColor': props.backgroundColor
  }
})

provide('backgroundColor', props.backgroundColor)
provide('textColor', props.textColor)
provide('activeTextColor', props.activeTextColor)
provide('hoverColor', props.textColor === '#000' ? '#409eff' : props.textColor)
provide('hoverBackgroundColor', props.backgroundColor === '#fff' && props.textColor === '#000' && props.activeTextColor === '#409eff' ? '#ecf5ff' : 'rgb(67, 74, 80)')
</script>

<style scoped>

.jili-menu {
  height: 50px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  background-color: var(--backgroundColor);
}
</style>
