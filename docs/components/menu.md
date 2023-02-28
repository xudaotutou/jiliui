---
title: Menu
lang: zh-CN
---
# Menu
为网站提供导航功能的菜单。

## 基础用法
顶部栏菜单可以在各种场景中使用。
在菜单中通过 `sub-menu` 组件可以生成二级菜单。 `Menu` 还提供了 `background-color` 、 `text-color` 和 `active-text-color` ，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。

<div class="box">
  <JMenuBase>
    <JMenuItem active>
      Processing Center
    </JMenuItem>
    <JMenuSub>
      <template #title>
        Workspace
      </template>
      <JMenuItem>item one</JMenuItem>
      <JMenuItem>item two</JMenuItem>
      <JMenuItem>item three</JMenuItem>
    </JMenuSub>
    <JMenuItem disabled>
      Info
    </JMenuItem>
    <JMenuItem>Orders</JMenuItem>
  </JMenuBase>
  <br><br><br><br><br><br><br>
  <JMenuBase
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <JMenuItem active>
      Processing Center
    </JMenuItem>
    <JMenuSub>
      <template #title>
        Workspace
      </template>
      <JMenuItem>item one</JMenuItem>
      <JMenuItem>item two</JMenuItem>
      <JMenuItem>item three</JMenuItem>
    </JMenuSub>
    <JMenuItem disabled>
      Info
    </JMenuItem>
    <JMenuItem>Orders</JMenuItem>
  </JMenuBase>
</div>

```vue
<template>
  <JMenu>
    <JMenuItem active>
      Processing Center
    </JMenuItem>
    <JMenuSub>
      <template #title>
        Workspace
      </template>
      <JMenuItem>item one</JMenuItem>
      <JMenuItem>item two</JMenuItem>
      <JMenuItem>item three</JMenuItem>
    </JMenuSub>
    <JMenuItem disabled>
      Info
    </JMenuItem>
    <JMenuItem>Orders</JMenuItem>
  </JMenu>

  
  <JMenu
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <JMenuItem active>
      Processing Center
    </JMenuItem>
    <JMenuSub>
      <template #title>
        Workspace
      </template>
      <JMenuItem>item one</JMenuItem>
      <JMenuItem>item two</JMenuItem>
      <JMenuItem>item three</JMenuItem>
    </JMenuSub>
    <JMenuItem disabled>
      Info
    </JMenuItem>
    <JMenuItem>Orders</JMenuItem>
  </JMenu>
</template>
```

<script setup>
import JMenuBase from '../../packages/components/menu/src/JMenu.vue'
import JMenuItem from '../../packages/components/menuItem/src/JMenuItem.vue'
import JMenuSub from '../../packages/components/menuSub/src/JMenuSub.vue'
</script>

<style scoped>
.box {
  width: 100%;
  padding: 10px;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
}
</style>