<script setup lang="ts">
import { reactive } from 'vue'
import { toggleActive } from '~/utils/dom'
import { idSetup } from '~/utils/math'
const props = withDefaults(defineProps<{
  tabN:number
}>(), {
})
const ids = idSetup(props.tabN)()
const publicName = idSetup(1)()[0]

const classes = reactive<string[]>(Array(props.tabN).fill(() => ''))
const active = 'active'
const toggleLabel = toggleActive(classes)(active)
toggleLabel(0)
</script>

<template>
  <div class="j-tab">
    <div
      class="j-tab-header"
    >
      <label
        v-for="(v, idx) in ids"
        :key="v"
        class="z-10 rounded-t border border-b-0 border-black"
        :class="classes[idx]"
        :for="`${v}`"
        :_order="idx"
        @click="toggleLabel(idx)"
      ><slot :name="`header-${idx}`" /></label>
    </div>
    <template
      v-for="(v, idx) in ids"
      :key="v"
    >
      <input
        :id="`${v}`"
        :name="`${publicName}`"
        type="radio"
        :checked="idx===0"
      >
      <section
        class="j-tab-content "
      >
        <slot
          :name="`content-${idx}`"
        />
      </section>
    </template>
  </div>
</template>

<style lang="postcss">
/* 骨架 */
.j-tab {
  @apply relative m-1 min-w-fit;
  &-header {
    @apply flex space-x-1;
    label {
      @apply  cursor-pointer overflow-hidden p-1 transition-all;
      &.active {
      @apply bg-gray-400;
    }
    }
  }
  &-content {
    @apply hidden w-full border border-black;
  }
  input[type="radio"] {
      @apply hidden
  }
  input[type="radio"]:checked + &-content {
        @apply flex;
  }

  }

</style>
