<template>
  <div>
    <div class="box">
      <h1>1、基础用法 placehlder属性 和双向绑定msg</h1>
      <myInput v-model="msg" placeholder="Please Input" />
      <span>msg:</span> {{ msg }}
    </div>
    <div class="box">
      <h1>2、利用type属性控制输入框模式</h1>
      textarea模式
      <myInput v-model="msg" type="textarea" placeholder="Input TextArea" />
    </div>
    <div class="box">
      <h1>3、利用size控制大小 不对textarea模式起作用</h1>
      <myInput />
      <myInput size="medium" />
      <myInput size="small" />
    </div>
    <div class="box">
      <h1>4、使用clearable属性即可得到一个可一键清空的输入框</h1>
      <myInput v-model="msg" :clearable="true" />
    </div>
    <div class="box">
      <h1>5、通过 disabled 属性指定是否禁用 input 组件</h1>
      <myInput placeholder="Please Input" :disabled="true" />
      <myInput type="textarea" placeholder="Please Input" :disabled="true" />
    </div>
    <div class="box">
      <h1>6、通过 center 属性指定文字居中 不对textarea模式起作用</h1>
      <myInput placeholder="Please Input" center />
    </div>
    <div class="box">
      <h1>7、有前后缀的复合型输入框</h1>
      <myInput placeholder="Please Input" center>
        <template v-slot:prepend>https://</template>
      </myInput>
      <myInput placeholder="Please Input" center>
        <template v-slot:append>.com</template>
      </myInput>
      <myInput placeholder="Please Input" center>
        <template v-slot:prepend>htpps://</template>
        <template v-slot:append>.com</template>
      </myInput>
    </div>
  </div>
</template>

<script>
import myInput from "../../packages/components/input/src/inputBase.vue";
export default {
  components: {
    myInput,
  },
  data() {
    return {
      msg: "hello world",
    };
  }
};
</script>

<style scoped>
.box {
  width: 350px;
  margin: 15px;
}
h1 {
  color: lightcoral;
  font-weight: 600;
}
</style>