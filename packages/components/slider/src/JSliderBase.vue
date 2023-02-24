<template>
  <div class="jili-slider-wrapper">
    <input
      v-model="rate"
      class="jili-slider-inner"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :style="{'background-size': `${(rate-min)/(max-min)*100}% 100%`}"
    >
    <div class="jili-show-tooltip">
      <div
        class="jili-show-rate"
        :style="{'left': `${(rate-min)/(max-min)*100}%`, 'display': `${showTooltip?'block':'none'}`}"
      >
        {{ rate }}
        <div class="jili-delta" />
      </div>
    </div>
    <div
      class="jili-show-input"
      :style="{ 'display': `${showInput?'block':'none'}`}"
    >
      <div
        class="jili-decline"
        :class="{'jili-disabled':rate===min}"
        @click="changeRate(-1)"
      >
        -
      </div>
      <input
        v-model="rate"
        type="number"
      >
      <div
        class="jili-increase"
        :class="{'jili-disabled':rate===max}"
        @click="changeRate(1)"
      >
        +
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const rate = ref(0)

const props = defineProps({
  min: {
    type: Number,
    require: false,
    default: 0
  },
  max: {
    type: Number,
    require: false,
    default: 100
  },
  step: {
    type: Number,
    require: false,
    default: 1
  },
  showTooltip: {
    type: Boolean,
    require: false,
    default: true
  },
  showInput: {
    type: Boolean,
    require: false,
    default: true
  }
})
function changeRate (n: number) {
  if (Number(rate.value) + Number(n) <= Number(props.min)) rate.value = props.min
  else if (Number(rate.value) + Number(n) >= Number(props.max)) rate.value = props.max
  else rate.value = Number(rate.value) + Number(n)
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.jili-slider-wrapper {
  position: relative;
  width: 1000px;
  height: 50px;
  padding-top: 30px;
  margin-bottom: 30px;
}

.jili-slider-inner {
  cursor: grab;
  width: 500px;
  height: 10px;
}

.jili-slider-inner:active {
  cursor: grabbing;
}
.jili-slider-inner:hover+.jili-show-tooltip {
  opacity: 1;
}
.jili-show-tooltip {
  position: absolute;
  top: 30px;
  left: 0;
  right: 20px;
  height: 1px;
  opacity: 0;
  transition: .3s;
}
.jili-show-rate {
  position: absolute;
  left: 0%;
  top: -20px;
  transform: translateX(-5px);
  width: 30px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  border-radius: 6px;
  font-size: 12px;
  background-color: #303133;
  color: #fff;
}
.jili-delta {
  width: 0px;
  height: 0px;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top: 4px solid #303133;
}
.jili-show-input {
  position: absolute;
  top: 30px;
  left: 100%;
}
input[type=range] {
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;
  background: -webkit-linear-gradient(#409eff, #409eff) no-repeat, #e4e7ed;
  background-size: 0% 100%;
  border-radius: 5px;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
  /* background: #409eff; */
  border-radius: 5px;
  /* border: 0.2px solid #010101; */
}
input[type=range]::-webkit-slider-thumb {
  /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
  border: 2px solid #409eff;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ffffff;
  cursor: grab;
  -webkit-appearance: none;
  margin-top: -5px;
  /* transform: translateY(-50%); */
}
input[type=range]:active::-webkit-slider-thumb {
  cursor: grabbing;
}
/* input[type=range]:focus::-webkit-slider-runnable-track {
  background: #367ebd;
} */
input[type=range]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
  background: #409eff;
  border-radius: tpx;
  /* border: 0.2px solid #010101; */
}
input[type=range]::-moz-range-thumb {
  /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
  /* border: 1px solid #000000; */
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ffffff;
  cursor: grab;
}
input[type=range]:focus::-moz-range-thumb {
  cursor: grabbing;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #409eff;
  /* border: 0.2px solid #010101; */
  border-radius: 5px;
  /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
}
input[type=range]::-ms-fill-upper {
  background: #fff;
  /* border: 0.2px solid #010101; */
  border-radius: 5px;
  /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
}
input[type=range]::-ms-thumb {
  /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
  /* border: 1px solid #000000; */
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ffffff;
  cursor: grab;
}
input[type=range]:focus::-ms-fill-lower {
  background: #409eff;
}
input[type=range]:focus::-ms-fill-upper {
  background: #fff;
}
.jili-show-input {
  margin-left: 20px;
  width: 110px;
  height: 25px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}
input[type='number'] {
  /* 兼容火狐 */
  -moz-appearance: textfield;
  text-align: center;
  height: 25px;
  width: 60px;
  border: 1px solid #dcdfe6;
  outline: none;
  padding: 0;
  position: absolute;
  top: 0;
  left: 24px;
  transition: .3s;
}
.jili-decline,
.jili-increase {
  width: 25px;
  height: 25px;
  line-height: 23px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  position: absolute;
  top: 0px;
  transition: .3s;
  background: #f5f7fa;
  user-select:none;
}
.jili-disabled {
  cursor: not-allowed;
}
.jili-decline {
  left: 0;
  border-radius: 5px 0 0 5px;
}
.jili-increase {
  left: 83px;
  border-radius: 0 5px 5px 0;
}
.jili-show-input:hover .jili-decline {
  border-top: 1px solid #c0c4cc;
  border-left: 1px solid #c0c4cc;
  border-bottom: 1px solid #c0c4cc;
}
.jili-show-input:hover .jili-increase {
  border-top: 1px solid #c0c4cc;
  border-right: 1px solid #c0c4cc;
  border-bottom: 1px solid #c0c4cc;
}
.jili-show-input:hover input {
  border-top: 1px solid #c0c4cc;
  border-bottom: 1px solid #c0c4cc;
}
</style>
