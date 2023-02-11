<template>
  <div class="jili-dropdown-item">
    <slot>Action</slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.jili-dropdown-item {
  display: inline-block;
  padding: 10px 15px;
  background-color: #fff;
  text-align: center;
  cursor: pointer;
}
.jili-dropdown-item:hover {
  background-color: #ecf5ff;
  color: #70b6ff;
}
</style>
