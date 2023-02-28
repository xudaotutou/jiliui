<script setup lang="ts">
import { ref } from 'vue'
import JStepsBase from '../../packages/components/steps/src/JStepsBase.vue'
import JStepBase from '../../packages/components/steps/src/JStepBase.vue'

const props: any = defineProps({
  kinds: String
})

const active = ref(1)

const next = () => {
  if (active.value++ > 3) active.value = 1
}
</script>
<template>
  <div class="jili-steps">
    <JStepsBase
      v-show="props.kinds === 'base'"
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
    <JStepsBase
      v-show="props.kinds === 'description'"
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
