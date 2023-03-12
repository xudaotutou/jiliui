<template>
  <div>
    <myInput
      type="markdown"
      @markdown="onMark"
    />
    <div
      class="box"
      v-html="mark"
    />
  </div>
</template>

<script lang="ts">
import myInput from '../../packages/components/input/src/JInput.vue'
import { ref } from 'vue'
export default {
  components: {
    myInput
  },
  setup () {
    const msg = ref('hello world')
    const mark = ref('')
    function onMark (e:any) {
      mark.value = e
    }
    return {
      msg,
      onMark,
      mark
    }
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 200px;
  padding: 15px;
  margin-top: 10px;
  background-color: #292b30;
  color: #ffcd32;
  overflow: hidden;
}
h1 {
  color: lightcoral;
  font-weight: 600;
}
</style>
