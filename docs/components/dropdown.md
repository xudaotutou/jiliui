---
title: Dropdown
lang: zh-CN
---
# Dropdown
将动作或菜单折叠到下拉菜单中。

## 基础用法
悬停在下拉菜单上以展开更多操作。
通过组件 `slot` 来设置下拉触发的元素以及需要通过具名 `slot` 为 `dropdown` 来设置下拉菜单。默认情况下，只需要悬停在触发菜单的元素上即可，无需点击也会显示下拉菜单。

<div class="box">
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
</div>

```vue
<template>
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
```

<script setup>
import JDropdownBase from '../../packages/components/dropdown/src/JDropdownBase.vue'
import JDropdownMenu from '../../packages/components/dropdownMenu/src/JDropdownMenu.vue'
import JDropdownItem from '../../packages/components/dropdownItem/src/JDropdownItem.vue'
</script>

<style scoped>
.box {
  width: 100%;
  padding: 10px;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
}

.jili-dropdown-link {
  color: #409eff;
  cursor: pointer;
}
</style>