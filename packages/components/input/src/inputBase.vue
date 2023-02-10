<template>
  <div class="inline-container">
    <template v-if="type === 'textarea'">
      <textarea
        class="jl-textarea"
        :class="styleClass"
        :disabled="disabled"
        v-bind="$attrs"
        :value="modelValue"
        @input="onInput"
      />
    </template>
    <template v-else>
      <div
        class="inline-container"
        :class="fixBorder"
      >
        <div
          v-if="$slots.prepend"
          class="jl-input-prepend"
        >
          <slot name="prepend" />
        </div>
        <div class="jl-input-outer">
          <input
            type="text"
            class="jl-input"
            :class="styleClass"
            v-bind="$attrs"
            :value="modelValue"
            :disabled="disabled"
            @input="onInput"
          >
          <span
            v-if="showClear"
            class="jl-input-clear"
            @click="clearItem"
          >x</span>
        </div>
        <div
          v-if="$slots.append"
          class="jl-input-append"
        >
          <slot name="append" />
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from "vue";
export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        return ["text", "textarea"].includes(value);
      },
    },
    size: {
      type: String,
      default: "",
      validator: (value) => {
        return ["", "medium", "small"].includes(value);
      },
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit, attrs, slots }) {
    // props
    const { modelValue, type, size, clearable, disabled, center } =
      toRefs(props);

    // methods
    function onInput(e) {
      emit("update:modelValue", e.target.value);
    }
    function clearItem() {
      emit("update:modelValue", "");
    }

    // computed
    const styleClass = computed(() => {
      return {
        [`jl-input--${size.value}`]: size.value && type.value != "textarea",
        "is-disabled": disabled.value,
        "is-center": center.value,
      };
    });
    const showClear = computed(() => {
      return clearable.value && modelValue.value != "";
    });
    const fixBorder = computed(() => {
      return {
        "has-prepend": slots.prepend,
        "has-append": slots.append
      };
    });

    return {
      showClear,
      styleClass,
      fixBorder,
      onInput,
      clearItem,
    };
  },
});
</script>

<style scoped>
.jl-input {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}

.is-disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}

.jl-input.is-center {
  text-align: center;
}

.jl-input:hover {
  border-color: #c0c4cc;
}

.jl-input:focus {
  outline: none;
  border-color: #409eff;
}

.jl-input::-webkit-scrollbar {
  z-index: 11;
  width: 6px;
}

.jl-input::-webkit-scrollbar:horizontal {
  height: 6px;
}

.jl-input::-webkit-scrollbar-thumb {
  border-radius: 5px;
  width: 6px;
  background: #b4bccc;
}

.jl-input::-webkit-scrollbar-corner {
  background: #fff;
}

.jl-input::-webkit-scrollbar-track {
  background: #fff;
}

.jl-input::-webkit-scrollbar-track-piece {
  background: #fff;
  width: 6px;
}

.jl-textarea {
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  box-sizing: border-box;
  width: 100%;
  font-size: inherit;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.jl-textarea:focus {
  outline: none;
  border-color: #409eff;
}

.jl-input-prepend,
.jl-input-append {
  background-color: #f5f7fa;
  color: #909399;
  display: flex;
  align-items: center;
  border: 1px solid #dcdfe6;
  border-radius: 0px;
  padding: 0 10px;
  width: 1px;
  white-space: nowrap;
  width: max-content;
}

.has-prepend .jl-input {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left: none;
}

.has-append .jl-input {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: none;
}

.has-prepend .jl-input-prepend {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.has-prepend .jl-input-append {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.has-append .jl-input-append {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.jl-input--medium {
  height: 36px;
  line-height: 36px;
}

.jl-input--small {
  height: 32px;
  line-height: 32px;
}

.inline-container {
  width: 100%;
  display: inline-flex;
}

.jl-input-outer {
  width: 100%;
  position: relative;
}

.jl-input-clear {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
  cursor: pointer;
}
</style>