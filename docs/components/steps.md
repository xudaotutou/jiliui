---
title: steps
lang: zh-CN
---
# steps
引导用户按照流程完成任务的分步导航条， 可根据实际应用场景设定步骤，步骤不得少于 2 步。

## 基础用法

设置 `active` 属性，接受一个 Number，表明步骤的 index，从 0 开始。最后一个步骤设置end属性，值为yes字符串，设置 `finish-status` 属性可以改变已经完成的步骤的状态。
<div style="background-color:#292b30; padding-top:25px"> 
  <mySteps kinds="base" />
</div>

~~~ vue
<template>
  <div class="jili-steps">
   <JStepsBase
      :active="active"
      finish-status="success"
    >
      <template #header="{ value }">
        <JStepBase
          :value="value"
          :num="1"
        />
        <JStepBase
          :value="value"
          :num="2"
        />
        <JStepBase
          :value="value"
          :num="3"
          end="yes"
        />
      </template>
    </JStepsBase>
    <button
      class="jili_btn"
      @click="next"
    >
      Next step
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(1)

const next = () => {
  if (active.value++ > 3) active.value = 1
}
</script>

<style scoped>
.jili-steps {
  width: 80%;
  margin: 20px auto;
  justify-content: center;
}
.jili_btn{
  margin-top: 70px;
  margin-left: 14%;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>

~~~


## 带描述的步骤栏
 - 每一步都有描述
 - 设置titel属性
 - 设置description属性
 <div style="background-color:#292b30; padding-top:25px"> 
  <mySteps kinds="description" />
</div>

 ~~~ vue
<template>
  <div class="jili-steps">
    <JStepsBase
      :active="active"
      finish-status="success"
    >
      <template #header="{ value }">
        <JStepBase
          :value="value"
          :num="1"
          title="Done"
          description="123"
        />
        <JStepBase
          :value="value"
          :num="2"
          title="Processing"
        />
        <JStepBase
          :value="value"
          :num="3"
          title="step 3"
          end="yes"
        />
      </template>
    </JStepsBase>
    <button
      class="jili_btn"
      @click="next"
    >
      Next step
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const active = ref(1)

const next = () => {
  if (active.value++ > 3) active.value = 1
}
</script>

<style scoped>
.jili-steps {
  width: 80%;
  margin: 20px auto;
  justify-content: center;
}
.jili_btn{
  margin-top: 70px;
  margin-left: 14%;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
 ~~~


<script setup>
import mySteps from '../../examples/components/mySteps.vue'
import JStepsBase from '../../packages/components/steps/src/JStepsBase.vue'
import JStepBase from '../../packages/components/steps/src/JStepBase.vue'

</script>