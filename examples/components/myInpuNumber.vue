<template>
  <div>
    <h2>1、基础用法</h2>
    <div class="box">
      <inputNumber v-model="count" />
    </div>
    <h2>2、允许定义递增递减的步进控制</h2>
    <div class="box">
      <inputNumber
        v-model="count"
        :step="3"
      />
    </div>
    <h2>3、禁用input</h2>
    <div class="box">
      <inputNumber
        v-model="count"
        disable
      />
    </div>
    <h2>4、控制数据范围</h2>
    <div class="box">
      <inputNumber
        v-model="count"
        :max="15"
        :min="1"
      />
    </div>
  </div>
</template>

<script>
import inputNumber from "../../packages/components/input-number/src/inputNumberBase.vue";
export default {
  components: {
    inputNumber,
  },
  data() {
    return {
      count: "5",
    };
  },
};
</script>

<style scoped>
.box {
  width: 120px;
  margin: 20px;
  margin-top: 7px;
}
h2 {
  color: lightcoral;
}
</style>