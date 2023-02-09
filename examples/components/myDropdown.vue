<script setup lang="ts">
import JDropdownBase from '../../packages/components/dropdown'
import JDropdownMenu from '../../packages/components/dropdownMenu'
import JDropdownItem from '../../packages/components/dropdownItem'

</script>

<template>
  <h1>Dropdown组件</h1>
  <JDropdownBase>
    <span class="jili-dropdown-link">
      Dropdown List
    </span>
    <template #dropdown>
      <JDropdownMenu>
        <JDropdownItem>Action 1</JDropdownItem>
        <JDropdownItem>Action 2</JDropdownItem>
        <JDropdownItem>Action 3</JDropdownItem>
        <JDropdownItem>Action 4</JDropdownItem>
      </JDropdownMenu>
    </template>
  </JDropdownBase>
</template>

<style scoped>
.jili-dropdown-link {
  color: #409eff;
  cursor: pointer;
}
</style>
