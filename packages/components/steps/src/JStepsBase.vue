<template>
  <div
    ref="steps"
    class="jili_steps"
  >
    <slot
      name="header"
      :value="state"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, defineProps, watch, readonly } from 'vue'
const props: any = defineProps({
  active: Number,
  finishStatus: String,
  direction: String
})
const steps = ref([])
const divs = (el: HTMLElement) => {
  (steps.value as Array<HTMLElement>).push(el)
}
const nums = ref(null)
const state = reactive({
  len: 0, // 两个节点之间的过度条长度
  active: 1,
  finishStatus: String,
  direction: String
})

watch(props, () => {
  console.log(props)
  state.active = props.active
  state.finishStatus = props.finishStatus
  state.direction = props.description
})

onMounted(() => {
  // 计算两个进度条之间的距离
  // if (props.direction === "vertical") {
  //   const p1 = (steps as any).value["children"][0].offsetTop;
  //   const p2 = (steps as any).value["children"][1].offsetTop;
  //   state.len = p2 - p1 - 34
  // } else {
  const p1 = (steps as any).value.children[0].offsetLeft
  const p2 = (steps as any).value.children[1].offsetLeft
  nums.value = (steps as any).value.children.length
  state.len = p2 - p1 - 34
  // }
  // console.log(state.len);
  // console.log(props);
})
</script>

<style scoped>
.jili_steps {
  display: flex;
  justify-content: space-around;
}
</style>
