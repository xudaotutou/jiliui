---
title: input-number
lang: zh-CN
---
# Input Number
仅允许输入标准的数字值，可定义范围

## 基础用法
使用 `v-model` 绑定变量即可，变量的初始值即为默认值
<myInputNumber :arrange="1"></myInputNumber>
~~~ vue
<template>
  <JInputNumber v-model="num"  @change="handleChange" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const num = ref(5)
const handleChange = (value: number) => {
  console.log(value)
}
</script>
~~~

## 禁用状态
使用 `disabled` 属性接受一个 Boolean，设置为true即可禁用整个组件
<myInputNumber :arrange="3"></myInputNumber>
~~~ vue
<template>
  <JInputNumber v-model="num" :disabled="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const num = ref(5)
</script>
~~~

## 控制数据范围
用 `min` 属性和 `max` 属性控制输入框数据范围， 默认最小值为 0
<myInputNumber :arrange="4"></myInputNumber>
~~~ vue
<template>
  <JInputNumber v-model="num" :min="1" :max="15" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const num = ref(5)
</script>
~~~

## 步进
设置 `step` 属性可以控制步长
<myInputNumber :arrange="2"></myInputNumber>
~~~ vue
<template>
  <JInputNumber v-model="num" :step="3" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(5)
</script>
~~~

## 精度
设置 `precision` 属性可以控制数值精度，接收一个 Number
<myInputNumber :arrange="5"></myInputNumber>
~~~ vue
<template>
  <JInputNumber v-model="num" :step="1.2" :max="15" :min="1" :precision="2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(5)
</script>
~~~
<script setup>
import myInputNumber from '../../examples/components/myInpuNumber.vue'
</script>
