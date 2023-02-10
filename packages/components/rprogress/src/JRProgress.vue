<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { forceInRange, forceLarge, forceSmall } from '~/utils/math'

const props = withDefaults(defineProps<{
  value?:number,
  size?:number,
  thickness?: number;
  start?:number;
  end?:number;
  contentCol?: string;
  contentNCol?: string;
  ballCol?:string;
}>(), {
  value: 0,
  size: 10,
  thickness: 10,
  start: 0,
  end: 360,
  contentCol: 'blue',
  contentNCol: 'red',
  ballCol: 'yellow'
})

const myStyle = computed(() => {
  const { value, size, thickness, start, end, contentCol, contentNCol, ballCol } = toRefs(props)
  const startVal = forceLarge(-360)(start.value)
  return {
    '--value': forceInRange(-100)(100)(value.value),
    '--size': forceLarge(0)(size.value) + 'rem',
    '--start': startVal,
    '--end': forceSmall(360 + startVal)(end.value),
    '--content-col': contentCol.value,
    '--content-n-col': contentNCol.value,
    '--ball--col': ballCol.value,
    '--thickness': forceLarge(0)(thickness.value)
  }
})
</script>

<template>
  <div
    class="radial-progress"
    :style="myStyle"
  >
    60%
  </div>
</template>

<style lang="postcss">
.radial-progress {
    @apply rounded-full relative flex items-center justify-center;
    --value: 40;
    --thickness: 10;
    --size: 10rem;
    --start: 180;
    --end: 360;
    --range: calc(var(--end) - var(--start));
    --percentage: calc(var(--value) / 360 * var(--range) * 1%);
    --content-col: blue;
    --content-n-col: red;
    --ball-col: black;
    --bar-r: calc((var(--thickness) / 4 + 0.5) * 1%);
    width: var(--size);
    height: var(--size);
    &::after,
    &::before {
      @apply rounded-full absolute;
      content: "";
    }
    &::before {
      @apply inset-0;
      background: radial-gradient(
            farthest-side,
            /* var(--ball-col) var(--bar-r-percentage), */
            /* transparent */
            var(--ball-col) 95%,
            transparent
          )
          top/calc((var(--thickness) + 2)/ 2 * 1%)
          calc((var(--thickness) + 2) / 2 * 1%) no-repeat,
        conic-gradient(
          /* farthest-side, */
          var(--content-col) var(--percentage),
          transparent var(--percentage),
          transparent calc(100% + var(--percentage)),
          var(--content-n-col) calc(100% + var(--percentage))
        );
      -webkit-mask: radial-gradient(
        farthest-side,
        transparent calc(98% - var(--thickness) * 1%),
        rgb(0, 0, 0) calc(99% - var(--thickness) * 1%),
        rgb(0, 0, 0) 99%,
        transparent 100%
      );
      /* transparent 抗锯齿+ 造环 */
      mask: radial-gradient(
        farthest-side,
        transparent calc(98% - var(--thickness) * 1%),
        rgb(0, 0, 0) calc(99% - var(--thickness) * 1%),
        rgb(0, 0, 0) 99%,
        transparent 100%
      );
      transform: rotate(calc(calc(var(--start) - 180) * 1deg));
    }
    &::after {
      @apply z-10;
      inset: calc(50% - var(--bar-r));
      background: radial-gradient(
        farthest-side,
        var(--ball-col) 95%,
        transparent
      );
      transform: rotate(
          calc(
            var(--value) * var(--range) * 0.01deg + var(--start) * 1deg + 90deg
          )
        )
        translate(calc(var(--size) / 2 - 50%));
    }
  }
</style>
