<template>
  <div>
    <h2>1、基础用法</h2>
    <div class="box">
      <inputNumber
        v-model="count"
        @change="changeHandle"
      />
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
    <h2>5、设置 precision 属性可以控制数值精度，接收一个 Number。</h2>
    <div class="box">
      <inputNumber
        v-model="coutFix"
        :max="15"
        :min="1"
        :precision="2"
        :step="1.2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import inputNumber from '../../packages/components/input-number/src/inputNumberBase.vue'
export default {
  components: {
    inputNumber
  },
  data () {
    return {
      count: '5',
      coutFix: '5.00'
    }
  },
  methods: {
    // 追踪输入框的输入值
    changeHandle (e:any) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
.box {
  width: 140px;
  margin: 20px;
  margin-top: 7px;
}
h2 {
  color: lightcoral;
}
</style>
