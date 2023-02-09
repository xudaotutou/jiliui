<template>
  <div class="jili-menu-sub">
    <div class="jili-menu-sub-title" :style="style">
      <slot name="title"></slot>
    </div>
    <div class="jili-menu-sub-list">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, CSSProperties, inject } from 'vue'

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
.jili-menu-sub-title {
  height: 49px;
  line-height: 49px;
  padding: 0 20px;
  color: var(--textColor);
  cursor: pointer;
  background-color: var(--backgroundColor);
  transition: .3s;
}
.jili-menu-sub-title:hover {
  color: var(--hoverColor);
}
.jili-menu-sub-list {
  opacity: 0;
  visibility: hidden;
  transition: .3s;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  overflow: hidden;
}
.jili-menu-sub:hover .jili-menu-sub-list{
  opacity: 1;
  visibility: visible;
}
</style>