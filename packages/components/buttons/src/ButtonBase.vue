<script setup lang="ts">
<<<<<<< HEAD
import { ref } from 'vue'
=======
import { ref } from "vue"
>>>>>>> 35503b4606fceca3370aafafbaa70cd6f9ed0d4c
const zero = ref(0)
function fn () {
  zero.value += 1
}
</script>

<template>
<<<<<<< HEAD
  <div class="h-20 w-60 border bg-slate-300" @click="fn">click me:{{ zero }}</div>

=======
  <div
    class="h-20 w-60 border bg-slate-300"
    @click="fn"
  >
    click me:{{ zero }}
  </div>
>>>>>>> 35503b4606fceca3370aafafbaa70cd6f9ed0d4c
</template>
