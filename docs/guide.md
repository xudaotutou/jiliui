---
title: introduction
lang: zh-CN
---

## 什么是jiliUI

- 基于 vue + tailwind 开发的组件库。
- 提供原子类和组件类，在非vue的前端项目(默认使用了tailwindcss)下也能使用

## 如何配置

- tailwind

```js{9}
// tailwind.config.cjs
module.exports = {
  content: [
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('./packages/style.cjs')
  ]
}


```

- 在使用vue项目导入 vue 组件
  
```js{3,5,7}
// index.ts, 全局导入
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ui from 'jiliui'
createApp(App)
  .use(ui)
  .mount('#app')


```

```vue
<!-- 也可以局部导入 -->
<script setup lang="ts">
import {JTab} from 'jiliui'
</script>

<template>
  <JTab
    :tab-n="2"
    class=" h-40"
  >
    <template #header-0>
      水果1
    </template>
    <template #content-0>
      ctx0
    </template>
  </JTab>
</template>
```
