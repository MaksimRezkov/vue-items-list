<template>
  <div class="item">
    <span>{{ item.body }}</span>
  </div>
</template>

<script setup lang="ts">
  import { ItemInt } from '@/types/Comment';

  const props = defineProps<{
    item: ItemInt;
  }>();

  const { item } = props;
</script>

<style lang="scss" scoped>
.item {
  padding: 10px;
  width: 150px;
  border: 1px solid teal;
  border-radius: 5px;
}
</style>
