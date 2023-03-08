---
title: tab
lang: zh-CN
---
# tab

切换内容页

<JTab
    :tab-n="2"
    class=" h-40"
  >
    <template #header-0>
      水果1
    </template>
    <template
      #header-1
    >
      水果2
    </template>
    <template #content-0>
      ctx0
    </template>
    <template
      #content-1
    >
      <div class="bg-yellow-50">
        ctx1
      </div>
    </template>
</JTab>

## 基于 vue props

- 用 tab-n 插槽控制可切换容器的数量

``` html

<JTab
    :tab-n="2"
    class=" h-40"
  >
    <template #header-0>
      水果1
    </template>
    <template
      #header-1
    >
      水果2
    </template>
    <template #content-0>
      ctx0
    </template>
    <template
      #content-1
    >
      <div>
        ctx1
      </div>
    </template>
</JTab>

```

## 基于提供的组件类

- dom结构会比较复杂, 但是使用起来更灵活,
- 关键类名`tab`(容器),`tab-header`(标签),`tab-content`(内容)

``` html

  <div class="j-tab">
    <div
      class="j-tab-header"
    >
      <label
        class="z-10 rounded-t border border-b-0 border-black"
        for="#t_1"
      ></label>
      <label
        class="z-10 rounded-t border border-b-0 border-black"
        for="#t_2"
      ></label>
    </div>
      <input
        id="t_1"
        type="radio"
        checked
      >
      <section
        class="j-tab-content "
      >
        ctx1
      </section>
      <input
        id="t_2"
        type="radio"
        checked
      >
      <section
        class="j-tab-content"
      >
        ctx2
      </section>
  </div>
```
