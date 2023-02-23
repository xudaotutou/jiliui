---
title: back to top
lang: zh-CN
---
# BackToTop

- 必须要放置在app根标签下

## 基于 vue props

- 用 top 插槽提供 top=${top}vh样式，默认是 90

``` html
<div id="app">
  <JBackToTop :top="40">
    <div class="h-10 w-10 bg-blue-400">
      top
    </div>
  </JBackToTop>
</div>

```

## 基于提供的组件类

- 更改top-[] 原子类可以自定义在距离视口
- href="#top" 必须，html5标准提供的返回顶部
- a标签已经转化inline-block

``` html
  <div class="back-to-top-wrapper">
    <a
      class="back-to-top top-[60vh]"
      href="#top"
    >top</a>
  </div>
```
