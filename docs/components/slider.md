---
title: Slider
lang: zh-CN
---
# Slider
通过拖动滑块在一个固定区间内进行选择

## 基础用法
在拖动滑块时，显示当前值
通过设置绑定值自定义滑块的初始值
<div class="box">
  <JSliderBase v-model="value1"/>
</div>

```vue
<template>
  <JSliderBase v-model="value"/>
</template>
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>
```

## 离散值
选项可以是离散的
改变 `step` 的值可以改变步长
<div class="box">
  <JSliderBase v-model="value2" :step="20"/>
</div>

```vue
<template>
  <JSliderBase v-model="value" :step="20"/>
</template>
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>
```

## 带有输入框的滑块
通过输入框输入来改变当前的值
设置 `show-input` 属性会在右侧显示一个输入框
<div class="box">
  <JSliderBase v-model="value3" show-input/>
</div>

```vue
<template>
  <JSliderBase v-model="value" show-input/>
</template>
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>
```

## 值边界选择
设置 `min` 和 `max` 以限制值的大小边界

<div class="box">
  <JSliderBase v-model="value4" :min="20" :max="300"/>
</div>

```vue
<template>
  <JSliderBase v-model="value"/>
</template>
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>
```

## 隐藏tooltip
设置 `show-tooltip` 为false来隐藏tooltip

<div class="box">
  <JSliderBase v-model="value5" :show-tooltip="false"/>
</div>

```vue
<template>
  <JSliderBase v-model="value" :show-tooltip="false"/>
</template>
<script setup>
import { ref } from 'vue'

const value = ref(0)
</script>
```
<script setup>
import JSliderBase from '../../packages/components/slider/src/JSliderBase.vue'
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
const value3 = ref(0)
const value4 = ref(20)
const value5 = ref(0)
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