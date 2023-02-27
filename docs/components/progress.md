---
title: progress
lang: zh-CN
---

## 柱形进度条 progress

<J-progress value="60" max="100"></J-progress>

```html
<progress class="progress" value="60" max="100"></progress>

```

- 基于progress标签封装，处理了firefox/chrome 的兼容性, 可以直接使用 progress 的 api
- value 不确定时也提供了样式处理
- content-col 柱形条的颜色
- bg-col 未填满的颜色
  
## 环形进度条 rprogress

<J-r-progress value="100" start="30" end="330">100%</J-r-progress>

```html
<div class="radial-progress" style="--value: 100; --size: 10rem; --start: 30; --end: 330; --content-col: blue; --content-n-col: red; --ball--col: yellow; --thickness: 10">100%</div>

```

- thickness 控制粗细 单位%
- size 控制width/height
- value 控制百分比最大为100
- content-col 当转的弧度> 0时展现的颜色
- content-n-col 当转的弧度 < 0时展现的颜色(value = -50这类情况)
- --ball-col 始末两个球的颜色
- start 起始偏移角
- end 末尾偏移角度

<script>
  import JRProgress from '../../packages/components/rprogress/src/JRProgress.vue'
  import JProgress from '../../packages/components/progress/src/JProgress.vue'
</script>
