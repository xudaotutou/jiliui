<template>
  <div>
    <myInput
      v-model="count"
      center
      :disabled="disable"
    >
      <template #prepend>
        <div
          class="cursor-pointer"
          :class="increaseDisable"
          @click.prevent="handleClick('increase')"
        >
          +
        </div>
      </template>
      <template #append>
        <div
          class="cursor-pointer"
          :class="decreaseDisable"
          @click.prevent="handleClick"
        >
          -
        </div>
      </template>
    </myInput>
  </div>
</template>

<script lang="ts">
import myInput from '../../input/src/JInput.vue'
import {
  defineComponent,
  ref,
  toRefs,
  computed
} from 'vue'
export default defineComponent({
  components: {
    myInput
  },
  props: {
    modelValue: {
      type: String,
      default: '0'
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      deafult: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    disable: {
      type: Boolean,
      defalut: false
    },
    precision: {
      type: Number,
      default: 0
    }
  },
  emits: ['update:modelValue', 'change'],
  setup (props, { emit }) {
    const { modelValue, step, max, min, disable, precision } = toRefs(props)

    // methods
    function handleClick (type:any) {
      if (disable.value) {
        return
      }
      const numberBase = Number(modelValue.value)
      if (numberBase > (max.value as any)) {
        emit('update:modelValue', (max.value as any).toFixed(precision.value))
        return
      } else if (numberBase < min.value) {
        emit('update:modelValue', min.value.toFixed(precision.value))
        return
      }
      if (type === 'increase') {
        if (step.value >= 0) {
          if (numberBase >= (max.value as any) || numberBase + step.value >= (max.value as any)) {
            emit('update:modelValue', (max.value as any).toFixed(precision.value))
            return
          }
        } else {
          if (numberBase <= min.value || numberBase + step.value <= min.value) {
            emit('update:modelValue', min.value.toFixed(precision.value))
            return
          }
        }
        emit('update:modelValue', (numberBase + step.value).toFixed(precision.value))
      } else {
        if (step.value >= 0) {
          if (numberBase <= min.value || numberBase - step.value <= min.value) {
            emit('update:modelValue', min.value.toFixed(precision.value))
            return
          }
        } else {
          if (numberBase >= (max.value as any) || numberBase - step.value >= (max.value as any)) {
            emit('update:modelValue', (max.value as any).toFixed(precision.value))
            return
          }
        }
        emit('update:modelValue', (numberBase - step.value).toFixed(precision.value))
      }
    }

    function isNumber (obj:any) {
      return typeof obj === 'number' && !isNaN(obj)
    }

    // computed
    const count = computed({
      get () {
        return modelValue.value
      },
      set (newValue : any) {
        // 说明不是正确地字符串数字
        if (!isNumber(newValue - 0)) {
          emit('update:modelValue', modelValue.value)
          emit('change', modelValue.value)
          return
        }
        emit('update:modelValue', newValue)
        emit('change', newValue)
      }
    })
    const increaseDisable = computed(() => {
      return {
        'is-disable':
          step.value >= 0
            ? disable.value || Number(modelValue.value) >= (max.value as any)
            : disable.value || Number(modelValue.value) <= min.value
      }
    })
    const decreaseDisable = computed(() => {
      return {
        'is-disable':
          step.value >= 0
            ? disable.value || Number(modelValue.value) <= min.value
            : disable.value || Number(modelValue.value) >= (max.value as any)
      }
    })

    return {
      count,
      handleClick,
      increaseDisable,
      decreaseDisable
    }
  }
})
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.is-disable {
  color: #a8abb2;
  cursor: not-allowed;
}
</style>
