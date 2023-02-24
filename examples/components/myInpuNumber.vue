<template>
  <div
    v-if="arrange===1"
    class="box"
  >
    <inputNumber
      v-model="count"
      @change="changeHandle"
    />
  </div>
  <div
    v-if="arrange===2"
    class="box"
  >
    <inputNumber
      v-model="count"
      :step="3"
    />
  </div>
  <div
    v-if="arrange===3"
    class="box"
  >
    <inputNumber
      v-model="count"
      disable
    />
  </div>
  <div
    v-if="arrange===4"
    class="box"
  >
    <inputNumber
      v-model="count"
      :max="15"
      :min="1"
    />
  </div>
  <div
    v-if="arrange===5"
    class="box"
  >
    <inputNumber
      v-model="coutFix"
      :max="15"
      :min="1"
      :precision="2"
      :step="1.2"
    />
  </div>
</template>

<script lang="ts">
import inputNumber from '../../packages/components/input-number/src/inputNumberBase.vue'
export default {
  components: {
    inputNumber
  },
  props: {
    arrange: {
      type: Number,
      default: 1 || 2 || 3 || 4 || 5
    }
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
