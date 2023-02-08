<template>
  <div>
    <div class="box">
      <h1>1、基础用法 placehlder属性 和双向绑定msg</h1>
      <myInput placeholder="Please Input" v-model="msg"></myInput>
      <span>msg:</span> {{ msg }}
    </div>
    <div class="box">
      <h1>2、利用type属性控制输入框模式</h1>
      textarea模式
      <myInput
        type="textarea"
        placeholder="Input TextArea"
        v-model="msg"
      ></myInput>
    </div>
    <div class="box">
      <h1>3、利用size控制大小 不对textarea模式起作用</h1>
      <myInput></myInput>
      <myInput size="medium"></myInput>
      <myInput size="small"></myInput>
    </div>
    <div class="box">
      <h1>使用clearable属性即可得到一个可一键清空的输入框</h1>
      <myInput :clearable="true" v-model="msg"></myInput>
    </div>
    <div class="box">
      <h1>通过 disabled 属性指定是否禁用 input 组件</h1>
      <myInput placeholder="Please Input" :disabled="true"></myInput>
      <myInput type="textarea" placeholder="Please Input" :disabled="true"></myInput>
    </div>
    <button @click="add">add</button>
  </div>
</template>

<script>
import myInput from "../../packages/components/input/src/inputBase.vue";
export default {
  components: {
    myInput,
  },
  methods: {
    add() {
      this.msg += "!!!";
    },
  },
  data() {
    return {
      msg: "hello world",
    };
  },
};
</script>

<style scoped>
.box {
  width: 350px;
  margin: 15px;
}
h1 {
  color: red;
  font-weight: 600;
}
</style>