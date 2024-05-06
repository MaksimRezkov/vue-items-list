<template>
  <div class="item">
    <div class="item-title item-section">
      <div class="item-label title-label">
        <span>Title</span>
      </div>
      <span>{{ item.name }}</span>
    </div>
    <div class="item-content item-section">
      <div class="item-label content-label">
        <span>Content</span>
      </div>
      <span>{{ item.body }}</span>
    </div>
    <Sublist/>
  </div>
</template>

<script setup lang="ts">
  import Sublist from './Sublist.vue';
  import { ItemInt } from '@/types/Comment';
  import { Ref, ref } from 'vue';

  const props = defineProps<{
    item: ItemInt;
  }>();

  const { item } = props;

  let sublistItems: Ref<number[]> | number[] = [];
  for (let i = 0; i < 20; i++) {
    sublistItems.push(i);
  }
  sublistItems = ref<number[]>(sublistItems);

</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  box-shadow: 0px 0px 12px 0px #000;
  border-radius: 5px;
  text-align: left;

  &-section {
    margin-bottom: 20px;
    padding-right: 15px;
  }

  &-label {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
