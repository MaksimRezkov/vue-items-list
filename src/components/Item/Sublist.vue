<template>
  <div class="sublist">
    <div class="sublist-item" v-for="subitem in 20" :key="subitem">
      {{ getsubItemNumber() }}
    </div>
  </div>
</template>

<script setup lang="ts">
  const getsubItemNumber = () => {
    return Math.floor(Math.random() * 100);
  }
</script>

<style lang="scss" scoped>
  .sublist {
    display: flex;
    gap: 10px;
    padding: 15px;
    max-width: 80%;
    box-shadow: 0px 0px 7px 0px #000 inset;
    overflow-x: scroll;

    &-item {
      padding: 10px;
      border-radius: 3px;
      border: 1px solid teal;
      font-size: 24px;
      font-weight: 600;
    }
  }
</style>
