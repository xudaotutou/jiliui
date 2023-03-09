<template>
  <div
    :class="[alertType,alert]"
  >
    <div
      v-show="visible"
      :class="alertContent"
      role="alert"
    >
      <div
        :class="[isCenter,isBold,titleClass]"
      >
        {{ title }}
      </div>
      <template v-if="closable">
        <span
          :class="rightHandler"
          @click="handleClose"
        >{{ closeText }}</span>
      </template>
    </div>
    <p
      :class="isCenter"
    >
      <slot>
        {{ description }}
      </slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, computed, withDefaults } from 'vue'
const alert = ref('alert')
const alertContent = ref('alertContent')
const rightHandler = ref('rightHandler')
const titleClass = ref('titleClass')
const visible = ref(true)
    interface Props {
        title: string,
        closable?: boolean,
        description?: string,
        closeText?:string,
        type?:string,
        showIcon?:boolean,
        center?:boolean,
        effect?:string
      }
const props = withDefaults(
  defineProps<Props>(),
  {
    title: '',
    description: '',
    closable: true,
    closeText: '关闭',
    type: 'success',
    showIcon: false,
    center: false,
    effect: 'light'
  }
)
const emit = defineEmits(['close'])
toRefs(props)
const isCenter = computed(() => {
  return props.center ? 'center' : ''
})
const alertType = computed(() => {
  if (props.effect === 'dark') {
    return `${props.type}Dark`
  } else {
    return props.type
  }
})
const isBold = computed(() => {
  return props.description ? 'bold' : ''
})
const handleClose = (evt:MouseEvent) => {
  visible.value = false
  emit('close', evt)
}
</script>
    <style scoped>
    .alert {
      padding: 10px;
      font-size: 12px;
      border-radius: 3px;
    }
    .alertContent {
      width: 100%;
      margin: 0;
      box-sizing: border-box;
      overflow: hidden;
      opacity: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .titleClass {
      display: flex;
      align-items: center;
      flex: 1;
    }
    .bold {
      font-weight: 600;
    }
    .center {
      justify-content: center;
      text-align: center;
    }
    .success {
      background-color: #f0f9eb;
      color: #73c74a;
    }
    .successDark{
      background-color: #67c23a;
      color: #fff;
    }
    .info {
      background-color: #f0f9eb;
      color: #999ca1;
    }
    .infoDark {
      background-color: #909399;
      color: #fff;
    }
    .warning {
      background-color: #fdf6ec;
      color: #e6a23c;
    }
    .warningDark {
      background-color: #e6a23c;
      color: #fff;
    }
    .error {
      background-color: #fdf6ec;
      color: #f89e9e;
    }
    .errorDark {
      background-color: #f56c6c;;
      color: #fff;
    }
    .dark {
      color: #fff;
    }
    .rightHandler {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    p {
      margin: 0!important;
    }

    </style>
