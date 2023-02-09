<template>
  <div class="jili-dropdown-menu">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.jili-dropdown-menu {
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  margin-top: 10px;
}
</style>