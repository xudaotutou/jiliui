<template>
  <!-- <div>
    <h2>通过 height 属性设置滚动条高度，若不设置则根据父容器高度自适应。</h2>
    <div class="box">
      <scrollbar height="400px">
        <p
          v-for="item in 20"
          :key="item"
          class="scrollbar-demo-item"
        >
          {{ item }}
        </p>
      </scrollbar>
    </div>
    <h2>当元素宽度大于滚动条宽度时，会显示横向滚动条。</h2>
    <div class="box2">
      <scrollbar>
        <div class="scrollbar-flex-content">
          <p
            v-for="item in 50"
            :key="item"
            class="scrollbar-demo-item2"
          >
            {{ item }}
          </p>
        </div>
      </scrollbar>
    </div>
    <h2>当元素高度超过最大高度，才会显示滚动条</h2> -->
  <div class="box3">
    <button @click="add">
      Add Item
    </button>
    <button @click="onDelete">
      Delete Item
    </button>
    <scrollbar max-height="400px">
      <p
        v-for="item in count"
        :key="item"
        class="scrollbar-demo-item3"
      >
        {{ item }}
      </p>
    </scrollbar>
  </div>
  <!-- </div> -->
</template>

<script lang="ts">
import scrollbar from '../../packages/components/scrollbar/src/scrollbarBase.vue'
import { ref } from 'vue'
export default {
  components: {
    scrollbar
  },
  setup () {
    const count = ref(3)
    const add = () => {
      count.value++
    }
    const onDelete = () => {
      if (count.value > 0) {
        count.value--
      }
    }
    return {
      count,
      add,
      onDelete
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.box {
  width: 450px;
  margin: 10px;
}
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}
.box2 {
  width: 700px;
  margin: 10px;
}
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item2 {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}
.box3 {
  width: 500px;
}
.scrollbar-demo-item3 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #409eff;
}
button {
    width: 100px;
    height:30px;
    background-color: #ffcd32;
    margin: 10px
}
</style>
