<script setup lang="ts">
import JMenuBase from '../../packages/components/menu'
import JMenuItem from '../../packages/components/menuItem'
import JMenuSub from '../../packages/components/menuSub'

</script>

<template>
  <h1>Menu组件</h1>
  <JMenuBase>
    <JMenuItem active>Processing Center</JMenuItem>
    <JMenuSub>
      <template #title>Workspace</template>
      <JMenuItem>item one</JMenuItem>
      <JMenuItem>item two</JMenuItem>
      <JMenuItem>item three</JMenuItem>
      <!-- <JMenuSub>
        <template #title>item four</template>
        <JMenuItem>item one</JMenuItem>
        <JMenuItem>item two</JMenuItem>
        <JMenuItem>item three</JMenuItem>
      </JMenuSub> -->
    </JMenuSub>
    <JMenuItem disabled>Info</JMenuItem>
    <JMenuItem>Orders</JMenuItem>
  </JMenuBase>
  <br><br><br><br><br><br><br>
  <h1>Menu组件，修改颜色</h1>
  <JMenuBase
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <JMenuItem active>Processing Center</JMenuItem>
    <JMenuSub>
      <template #title>Workspace</template>
      <JMenuItem>item one</JMenuItem>
      <JMenuItem>item two</JMenuItem>
      <JMenuItem>item three</JMenuItem>
      <!-- <JMenuSub>
        <template #title>item four</template>
        <JMenuItem>item one</JMenuItem>
        <JMenuItem>item two</JMenuItem>
        <JMenuItem>item three</JMenuItem>
      </JMenuSub> -->
    </JMenuSub>
    <JMenuItem disabled>Info</JMenuItem>
    <JMenuItem>Orders</JMenuItem>
  </JMenuBase>
</template>

<style scoped>

</style>
