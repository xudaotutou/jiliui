<template>
  <div :class="[{'jili-active': active}, disabled ? 'jili-menu-item-disabled' : 'jili-menu-item']" :style="style">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'

const props = defineProps({
  index: {
    type: Number,
    require: true,
  },
  active: {
    type: Boolean,
    require: false,
    default: false
  },
  disabled: {
    type: Boolean,
    require: false,
    default: false
  }
})

const backgroundColor = inject('backgroundColor')
const textColor = inject('textColor')
const activeTextColor = inject('activeTextColor')
const hoverColor = inject('hoverColor')
const hoverBackgroundColor = inject('hoverBackgroundColor')

const style = computed(() => {
  return {
    '--backgroundColor': `${backgroundColor}`,
    '--textColor': `${textColor}`,
    '--activeTextColor': `${activeTextColor}`,
    '--hoverColor': `${hoverColor}`,
    '--hoverBackgroundColor': `${hoverBackgroundColor}`,
  }
})
</script>

<style scoped>
.jili-menu-item,
.jili-menu-item-disabled {
  height: 49px;
  line-height: 49px;
  padding: 0 20px;
  background-color: var(--backgroundColor);
}
.jili-menu-item {
  cursor: pointer;
  transition: .3s;
  color: var(--textColor);
}
.jili-menu-item:hover {
  color: var(--hoverColor);
  background-color: var(--hoverBackgroundColor);
}
.jili-menu-item-disabled {
  color: #ccc;
  cursor: not-allowed;
}
.jili-menu-item.jili-active {
  color: var(--activeTextColor);
  border-bottom: 2px solid var(--activeTextColor);
}
</style>