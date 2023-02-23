---
title: layout
lang: zh-CN
---
# Layout

~~~ css
  .w-1\/24:{
    width: '4.166667%';
  }

~~~

- 增加了 w-1/24 来适配主流的 24 布局
- 提供了 css 原子类 w-offset-(l|r)-\[\[分栏\]\/\[总共分栏\]\], w-(push|pull)-\[\[分栏\]\/\[总共分栏\]\] , 可以增强 tailwindcss 使用 width 百分比的flex布局
- basic 也为24分栏补充了

## offset-l / r

- 在分栏布局中提供了偏移，offset方案会占据分栏
- 例如: 1/24 就是在 24 分栏中多占据 1 个分栏，在当前行中填满24个分栏时少计 1 个分栏

~~~ css
  .w-offset-l-[1\/24]:{margin-left:"4.166667%";}
  .w-offset-r-[1\/24]:{margin-right:"4.166667%";}
~~~

## push / pull

- 该方法并不会占据分栏，分栏应该要填满
- 例如: 1/24 就是在 24 分栏中偏移 1 个分栏，并且要处理层级关系

~~~ css
  .w-pull-[1\/24]:{
        position:'relative';
        right:"4.166667%";
      }
  .w-push-[1\/24]:{
        position:'relative';
        left:"4.166667%";
      }
~~~

## basis

~~~ css

.basis-1\/24 {
    flex-basis: 4.166667%
}
.basis-2\/24 {
    flex-basis: 8.333333%
}
.basis-3\/24 {
    flex-basis: 12.5%
}
.basis-4\/24 {
    flex-basis: 16.666667%
}
.basis-5\/24 {
    flex-basis: 20.833333%
}
.basis-6\/24 {
    flex-basis: 25%
}
.basis-7\/24 {
    flex-basis: 29.166667%
}
.basis-8\/24 {
    flex-basis: 33.333333%
}
.basis-9\/24 {
    flex-basis: 37.5%
}
.basis-10\/24 {
    flex-basis: 41.666667%
}
.basis-11\/24 {
    flex-basis: 45.833333%
}
.basis-12\/24 {
    flex-basis: 50%
}
.basis-13\/24 {
    flex-basis: 54.166666%
}
.basis-14\/24 {
    flex-basis: 58.333333%
}
.basis-15\/24 {
    flex-basis: 62.5%
}
.basis-16\/24 {
    flex-basis: 66.666667%
}
.basis-17\/24 {
    flex-basis: 70.833333%
}
.basis-18\/24 {
    flex-basis: 75%
}
.basis-19\/24 {
    flex-basis: 79.166666%
}
.basis-20\/24 {
    flex-basis: 83.333333%
}
.basis-21\/24 {
    flex-basis: 88.5%
}
.basis-22\/24 {
    flex-basis: 91.666667%
}
.basis-23\/24 {
    flex-basis: 95.833333%
}

~~~

- basis对24 分栏的扩充

## 分栏布局拓展

```css
 
.w-j-p-[1/3]{width:33.333333%;}

```

- w-j-p-\[\[分栏\]\/\[总共分栏\]\] 提供了自定义分栏的能力

<style>

</style>