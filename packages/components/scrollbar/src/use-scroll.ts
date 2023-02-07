// y轴 x轴的滚轮驱动 拖拽驱动

import standardizedWheel from './standardizedWheel'

export default function useScroll (contentView: any, scrollbarWrap: any, yScrollbar: any, sliderHeight: any, xScrollbar: any, sliderWidth: any): any {
  const scrollFactor = 40
  const pageY: any = {}
  const pageX: any = {}

  function yscrollWheel (event: WheelEvent): void {
    const e = standardizedWheel(event)
    const scrollbarWrapEle = scrollbarWrap.value
    const contentEle = contentView.value
    const scrollTop = scrollbarWrapEle.scrollTop - e.deltaY * scrollFactor
    scrollbarWrapEle.scrollTop = scrollTop
    const railHeight = scrollbarWrapEle.clientHeight - 2
    const sliderRatio =
      (railHeight - sliderHeight.value) /
      (contentEle.clientHeight - scrollbarWrapEle.clientHeight)
    const yScrollbarEle = yScrollbar.value
    yScrollbarEle.style.top = String((scrollTop * sliderRatio)) + 'px'
    if (scrollbarWrapEle.scrollTop === 0) {
      yScrollbarEle.style.top = String(2) + 'px'
    }
    if (
      scrollbarWrapEle.scrollTop ===
      scrollbarWrapEle.scrollHeight - scrollbarWrapEle.clientHeight
    ) {
      yScrollbarEle.style.top = String(2 + railHeight - sliderHeight.value) + 'px'
    }
  }

  function yscrollMousedown (e: MouseEvent): void {
    const yScrollbarEle = yScrollbar.value
    const scrollbarWrapEle = scrollbarWrap.value
    const contentEle = contentView.value
    const railHeight = scrollbarWrapEle.clientHeight - 2
    pageY.lasted = e.pageY
    const sliderRatio =
      (railHeight - sliderHeight.value) /
      (contentEle.clientHeight - scrollbarWrapEle.clientHeight)
    pageY.lastedScrollTop = scrollbarWrapEle.scrollTop * sliderRatio
    document.documentElement.addEventListener('mousemove', mouseMove)
    function mouseMove (e: MouseEvent): void {
      e.preventDefault()
      const moveDelta = e.pageY - pageY.lasted
      const sliderTop = (pageY.lastedScrollTop) as number + moveDelta
      const scrollTop = sliderTop / sliderRatio
      scrollbarWrapEle.scrollTop = scrollTop
      yScrollbarEle.style.top = String(sliderTop) + 'px'
      if (scrollbarWrapEle.scrollTop === 0) {
        yScrollbarEle.style.top = String(2) + 'px'
      }
      if (
        scrollbarWrapEle.scrollTop ===
        scrollbarWrapEle.scrollHeight - scrollbarWrapEle.clientHeight
      ) {
        yScrollbarEle.style.top = String(2 + railHeight - sliderHeight.value) + 'px'
      }
    }
    document.documentElement.addEventListener('mouseup', (e) => {
      e.preventDefault()
      document.documentElement.removeEventListener('mousemove', mouseMove)
    })
  }

  function xscrollMousedown (e: MouseEvent): void {
    const xScrollbarEle = xScrollbar.value
    const scrollbarWrapEle = scrollbarWrap.value
    const contentEle = contentView.value
    const railWidth = scrollbarWrapEle.clientWidth - 2
    pageX.lasted = e.pageX
    const sliderRatio =
      (railWidth - sliderWidth.value) /
      (contentEle.scrollWidth - scrollbarWrapEle.clientWidth)
    pageX.lastedScrollLeft = scrollbarWrapEle.scrollLeft * sliderRatio
    document.documentElement.addEventListener('mousemove', mouseMove)
    function mouseMove (e: any): void {
      e.preventDefault()
      const moveDelta = e.pageX - pageX.lasted
      const sliderLeft = (pageX.lastedScrollLeft) as number + moveDelta
      const scrollLeft = sliderLeft / sliderRatio
      scrollbarWrapEle.scrollLeft = scrollLeft
      xScrollbarEle.style.left = String(sliderLeft) + 'px'
      if (scrollbarWrapEle.scrollLeft === 0) {
        xScrollbarEle.style.left = String(2) + 'px'
      }
      if (
        scrollbarWrapEle.scrollLeft ===
        contentEle.scrollWidth - scrollbarWrapEle.clientWidth
      ) {
        xScrollbarEle.style.left = String(railWidth - sliderWidth.value) + 'px'
      }
    }
    document.documentElement.addEventListener('mouseup', (e) => {
      e.preventDefault()
      document.documentElement.removeEventListener('mousemove', mouseMove)
    })
  }
  return {
    yscrollWheel,
    yscrollMousedown,
    xscrollMousedown
  }
}
