---
title: scrollbar
lang: zh-CN
---
# Scrollbar
用于替换浏览器原生滚动条

## 基础用法
通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应
<div class="box">
<myScrollbar height="400px"><p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p></myScrollbar>
</div>

~~~ vue
<template>
  <JScrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </JScrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}
</style>
~~~

## 横向滚动条
当元素宽度大于滚动条宽度时，会显示横向滚动条

<div class="box2">
    <myScrollbar>
        <div class="scrollbar-flex-content">
            <p v-for="item in 50" :key="item" class="scrollbar-demo-item2">{{ item }}</p>
        </div>
    </myScrollbar>
</div>

~~~ vue
<template>
  <JScrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </JScrollbar>
</template>

<style scoped>
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}
</style>
~~~

## 最大高度
当元素高度超过最大高度 `max-height`，才会显示滚动条

<scrollbarTest></scrollbarTest>

~~~ vue
<template>
  <JButton @click="add">Add Item</JButton>
  <JButton @click="onDelete">Delete Item</JButton>
  <JScrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </JScrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}
</style>
~~~

<script setup>
import myScrollbar from '../../packages/components/scrollbar/src/JScrollbar.vue'
import scrollbarTest from '../../examples/components/myScrollbar.vue'
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.box {
  width: 550px;
  margin: 10px;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}
.box2 {
  width: 700px;

}
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item2 {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px !important;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}
.box3 {
  width: 500px;
}
.scrollbar-demo-item3 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}
</style>