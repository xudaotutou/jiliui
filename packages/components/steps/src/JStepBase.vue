<template>
  <div class="jili_step">
    <div class="jili_head_box">
      <div
        class="jili_circle"
        :class="{
          jili_black: props.value.active === props.num,
          jili_green: props.value.active > props.num,
        }"
      >
        {{ props.value.active > props.num ? "√" : props.num }}
      </div>
      <div
        v-if="!props.end"
        class="jili_line"
        :class="{
          jili_lines: props.value.active > props.num,
        }"
        :style="wid"
      />
    </div>
    <div
      v-if="props.title"
      class="jili_step_title"
      :class="{
        jili_black: props.value.active === props.num,
        jili_green: props.value.active > props.num,
      }"
    >
      <div>{{ props.title }}</div>
      <div v-if="props.description">
        {{ props.description }}
      </div>
    </div>
    <div
      v-if="props.end"
      class="last"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue'
const props: any = defineProps({
  num: Number,
  title: String,
  description: String,
  end: String,
  value: {}
})
const wid = ref()
watch(props, () => {
  // 设置两个节点之间的过度条长度
  // console.log(props.value);
  if (props.value.direction) {
    wid.value = { height: `${props.value.len}px` }
  } else {
    wid.value = { width: `${props.value.len}px` }
  }
})
</script>

<style scoped>
.jili_head_box {
  display: flex;
  position: relative;
}
.jili_col {
  flex-direction: column;
  height: 100%;
}
.jili_circle {
  width: 30px;
  border: 2px solid #eee;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  text-align: center;
  color: #eee;
}
.jili_step_title {
  position: absolute;
  color: #eee;
  /* text-align: center; */
}
.jili_gery {
  color: #eee;
  border-color: #eee;
}
.jili_black {
  color: #000;
  border-color: #000;
}
.jili_green {
  color: rgb(84, 235, 140);
  border-color: rgb(84, 235, 140);
}
.jili_line {
  position: absolute;
  left: 34px;
  top: 15px;
  transform: translateY(-50%);
  height: 2px;
  background: #eee;
}
.jili_lines {
  background: rgb(84, 235, 140);
}
</style>
