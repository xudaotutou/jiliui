<script setup lang="ts">
import { ref } from 'vue';
let zero = ref(0)
function fn(){
  zero.value +=1
}
</script>

<template>
  <div class="bg-slate-300 w-60 h-20 border" @click="fn">click me:{{ zero }}</div>

</template>