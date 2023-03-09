---
title: calendar
lang: zh-CN
---
# calendar
显示日期

## 基础用法

设置 `value` 来指定当前显示的月份。 如果 value 未指定，则显示当月。 value 支持 v-model 双向绑定。

<JCalendarBase v-model="value" />

~~~ vue
<template>
  <h1>Calendar组件</h1>
  <JCalendar :value="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(new Date())
</script>

~~~


<script setup>
import JCalendarBase from '../../packages/components/calendar/src/JCalendar.vue'
</script>