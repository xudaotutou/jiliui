<template>
  <div>
    <myInput
      v-model="count"
      center
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
import myInput from "../../input/src/inputBase.vue";
import { defineComponent, ref, toRefs, computed } from "vue";
export default defineComponent({
  components: {
    myInput,
  },
  props: {
    modelValue: {
      type: String,
      default: "0",
    },
    step: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      deafult: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    disable: {
      type: Boolean,
      defalut: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { modelValue, step, max, min, disable } = toRefs(props);

    // methods
    function handleClick(type) {
      if (disable.value) {
        return;
      }
      let numberBase = Number(modelValue.value);
      if (type === "increase") {
        if (step.value >= 0) {
          if (numberBase >= max.value || numberBase + step.value >= max.value) {
            emit("update:modelValue", String(max.value));
            return;
          }
        }
        // step<0
        else {
          if (numberBase <= min.value || numberBase + step.value <= min.value) {
            emit("update:modelValue", String(min.value));
            return;
          }
        }
        emit("update:modelValue", String(numberBase + step.value));
      } else {
        if (step.value >= 0) {
          if (numberBase <= min.value || numberBase - step.value <= min.value) {
            emit("update:modelValue", String(min.value));
            return;
          }
        } else {
          if (numberBase >= max.value || numberBase - step.value >= max.value) {
            emit("update:modelValue", String(max.value));
            return;
          }
        }
        emit("update:modelValue", String(numberBase - step.value));
      }
    }

    // computed
    const count = computed(() => {
      return modelValue.value;
    });
    const increaseDisable = computed(() => {
      return {
        "is-disable":
          step.value >= 0
            ? disable.value || Number(modelValue.value) >= max.value
            : disable.value || Number(modelValue.value) <= min.value,
      };
    });
    const decreaseDisable = computed(() => {
      return {
        "is-disable":
          step.value >= 0
            ? disable.value || Number(modelValue.value) <= min.value
            : disable.value || Number(modelValue.value) >= max.value,
      };
    });

    return {
      count,
      handleClick,
      increaseDisable,
      decreaseDisable,
    };
  },
});
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