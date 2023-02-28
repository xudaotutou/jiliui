## 安装
JL Ui目前还处于快速开发迭代中。

~~~ 
# 选择一个你喜欢的包管理器

# NPM
$ npm install jiliui --save

# pnpm
$ pnpm install jiliui

~~~
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
## 在vue3项目中完整引入
  
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

## 支持按需引入
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