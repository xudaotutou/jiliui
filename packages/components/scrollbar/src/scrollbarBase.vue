<template>
  <div class="jili-scrollbar">
    <div
      ref="scrollbarWrap"
      class="jili-scrollbar_wrap"
      :style="{ height: visibleHeight, maxHeight: yMaxHeight }"
      @mousewheel.prevent="yscrollWheel"
    >
      <div
        ref="contentView"
        class="jili-scrollbar-view"
      >
        <slot />
      </div>
    </div>
    <div
      class="jili-scrollbar_bar is-horizontal"
      :class="{ isdisplay: xdisplay }"
    >
      <div
        ref="xScrollbar"
        class="jili-scroll_thumb"
        :style="{ width: sliderWidth + 'px' }"
        @mousedown="xscrollMousedown"
      />
    </div>
    <div
      ref="yScrollbar"
      class="jili-scrollbar_bar is-vertical"
      :class="{ isdisplay: ydisplay }"
    >
      <div
        class="jili-scroll_thumb"
        :style="{ height: sliderHeight + 'px' }"
        @mousedown="yscrollMousedown"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick, toRefs } from 'vue'
import useScroll from './use-scroll'
export default defineComponent({
  props: {
    height: {
      type: String,
      default: '100%'
    },
    maxHeight: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    // dom
    const contentView = ref()
    const scrollbarWrap = ref()
    const yScrollbar = ref()
    const xScrollbar = ref()

    const sliderHeight = ref<number>(0)
    const sliderWidth = ref<number>(0)
    const visibleHeight = ref<string>('')
    const yMaxHeight = ref<string>('')
    const xdisplay = ref<boolean>(true)
    const ydisplay = ref<boolean>(true)
    const { height, maxHeight } = toRefs(props)
    visibleHeight.value = height.value
    yMaxHeight.value = maxHeight.value

    onMounted(() => {
      const contentEle = contentView.value
      const scrollbarWrapEle = scrollbarWrap.value

      const railHeight = scrollbarWrapEle.clientHeight - 2
      sliderHeight.value =
        Math.max(
          Math.floor(
            (scrollbarWrapEle.clientHeight * railHeight) /
              contentEle.clientHeight
          ),
          25
        ) - 5
      const railWidth = scrollbarWrapEle.clientWidth - 2
      sliderWidth.value =
        Math.max(
          Math.floor(
            (scrollbarWrapEle.clientWidth * railWidth) / contentEle.scrollWidth
          ),
          25
        ) - 5
      if (contentEle.clientHeight > scrollbarWrapEle.clientWidth) {
        ydisplay.value = false
      }
      if (contentEle.scrollWidth > scrollbarWrapEle.clientWidth) {
        xdisplay.value = false
      }
    })

    // MutationObserver监听dom变化
    if (maxHeight.value && height.value === '100%') {
      const observe = new MutationObserver((mutationList) => {
        const curMaxHeight = (maxHeight.value as any).split('px')[0] - 0
        if (contentView.value.clientHeight > curMaxHeight) {
          const contentEle = contentView.value
          const scrollbarWrapEle = scrollbarWrap.value
          const railHeight = scrollbarWrapEle.clientHeight - 2
          sliderHeight.value =
            Math.max(
              Math.floor(
                (scrollbarWrapEle.clientHeight * railHeight) /
                  contentEle.clientHeight
              ),
              25
            ) - 5
          ydisplay.value = false
        } else {
          ydisplay.value = true
        }
      })
      nextTick(() => {
        observe.observe(contentView.value, {
          childList: true
        })
      })
    }

    // hooks
    const { yscrollWheel, yscrollMousedown, xscrollMousedown } = useScroll(
      contentView,
      scrollbarWrap,
      yScrollbar,
      sliderHeight,
      xScrollbar,
      sliderWidth
    )

    return {
      visibleHeight,
      yMaxHeight,
      contentView,
      scrollbarWrap,
      sliderHeight,
      sliderWidth,
      xdisplay,
      ydisplay,
      yscrollWheel,
      yscrollMousedown,
      yScrollbar,
      xScrollbar,
      xscrollMousedown
    }
  }
})
</script>

<style scoped>
.jili-scrollbar {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.jili-scrollbar_wrap {
  overflow: hidden;
  height: 100%;
}
.jili-scrollbar_bar {
  position: absolute;
  right: 2px;
  z-index: 1;
  border-radius: 4px;
  opacity: 0.3;
  background-color: #909399;
}
.jili-scrollbar_bar:hover {
  opacity: 0.5;
}
.is-horizontal {
  width: 0;
  height: 6px;
  left: 2px;
  bottom: 2px;
}
.is-vertical {
  width: 6px;
  top: 2px;
}
.is-horizontal > div {
  height: 100%;
}
.is-vertical > div {
  width: 100%;
}
.jili-scroll_thumb {
  position: relative;
  display: block;
  width: 0;
  height: 0;
  cursor: pointer;
  border-radius: inherit;
  opacity: 0.3;
  background-color: #909399;
}
.isdisplay {
  display: none;
}
</style>
