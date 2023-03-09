---
title: input
lang: zh-CN
---
# Input
通过键盘输入字符

## 基础用法
<myInput placeholder="Please Input" v-model="input"/>
~~~ vue
<template>
    <JInput placeholder="Please Input" v-model="input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
~~~

## 禁用状态
通过 `disabled` 属性指定是否禁用 input 组件
<myInput placeholder="Please Input" :disabled="true" v-model="input"/>
~~~ vue
<template>
  <JInput v-model="input" disabled placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
~~~

## 一键清空
使用`clearable`属性即可得到一个可一键清空的输入框
<inputTest></inputTest>
~~~ vue
<template>
  <JInput v-model="input" clearable placeholder="Please input"  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('hello world')
</script>
~~~

## 文本域
用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 input 元素转换为原生的 textarea 元素
<myInput v-model="input" type="textarea" placeholder="Input TextArea" />
~~~ vue
<template>
  <JInput v-model="input" type="textarea" placeholder="Input TextArea" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
~~~

## 尺寸
使用 `size` 属性改变输入框大小。 除了默认大小外，还有另外两个选项： `medium` 、 `small`
<myInput />
------
<myInput size="medium" />
-----
<myInput size="small" />
~~~ vue
<template>
  <JInput v-model="input"  />
  <JInput v-model="input" size="medium" />
  <JInput v-model="input" size="small" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
~~~

## 文字居中
通过 `center` 属性指定文字居中
<myInput v-model="input" placeholder="Please Input" center/>
~~~ vue
<template>
  <JInput v-model="input" placeholder="Please Input" center />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
~~~

## 复合型输入框
可通过 `slot` 来指定在 Input 中分发的前置或者后置的内容
<myInput placeholder="Please Input" center><template #prepend>https://</template></myInput>
--------
<myInput placeholder="Please Input"  center><template #append>.com</template></myInput>
--------
<myInput placeholder="Please Input" center ><template #prepend>htpps://</template><template #append>.com</template></myInput>
~~~ vue
<template>

<JInput placeholder="Please Input" center>
    <template #prepend>https://</template>
</JInput>

<JInput placeholder="Please Input"  center>
    <template #append>.com</template>
</JInput>

<JInput placeholder="Please Input" center >
    <template #prepend>htpps://</template><template #append>.com</template>
</JInput>

</template>
~~~
<script setup>
import myInput from '../../packages/components/input/src/JInput.vue'
import inputTest from '../../examples/components/myInput.vue'
</script>