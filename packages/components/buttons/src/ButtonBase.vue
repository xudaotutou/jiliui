<script setup lang="ts">
import { ref } from 'vue'
const zero = ref(0)
function fn () {
  zero.value += 1
}
</script>

<template>
  <div
    class="h-20 w-60 border bg-slate-300"
    @click="fn"
  >
    click me:{{ zero }}
  </div>
</template>
