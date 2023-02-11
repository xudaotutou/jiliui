<template>
  <div
    class="jili-dropdown"
    @mouseover="showDropdown"
    @mouseout="hideDropdown"
  >
    <span class="jili-dropdown-link">
      <slot />
    </span>
    <span
      class="jili-dropdown-menu-wrapper"
      :class="{'is-show': isShow}"
    >
      <slot name="dropdown" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isShow = ref(true)

function showDropdown () {
  isShow.value = false
}
function hideDropdown () {
  isShow.value = true
}
</script>

<style scoped>
.jili-dropdown {
  box-sizing: border-box;
  display: inline-block;
}
.jili-dropdown-menu-wrapper {
  visibility: visible;
  opacity: 1;
  transition: .3s;
  overflow: hidden;
}
.jili-dropdown-menu-wrapper.is-show {
  opacity: 0;
  visibility: hidden;
  transition: .3s;
}
</style>
