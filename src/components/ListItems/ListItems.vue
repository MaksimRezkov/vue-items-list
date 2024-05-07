<template>
  <div class="list">
    <div class="list-items" ref="listItemsRef">
      <Item v-for="item in itemList" :key="item.id" :item="item"/>
    </div>
    <LoadSpinner v-if="isLoading"/>
  </div>
</template>

<script setup lang="ts">
  import Item from '@/components/Item/Item.vue';
  import { LoadSpinner } from '@/components/common';
  import { useFetchItems } from './hooks/useFetchItems';
  import { useCheckScroll, useCheckRemainingWithoutScroll } from './hooks/utils';
  import { ItemInt } from '@/types/Comment';
  import { onMounted, ref } from 'vue';

  const listItemsRef = ref<HTMLElement | null>(null);
  const { itemList, isLoading, totalCount, page, limit } = useFetchItems();
  useCheckScroll({totalCount, itemList, page, isLoading });
  onMounted(() => useCheckRemainingWithoutScroll<ItemInt>({ totalCount, itemList, page, listWrapper: listItemsRef, limit}))

</script>
<style lang="scss" scoped>
.list {
  display: flex;
  place-items: center;
  flex-direction: column;

  padding: 2rem;
  padding-bottom: 3rem;

  &-items {
    display: flex;
    place-items: center;
    flex-direction: column;
    gap: 25px;
    width: 100%;
  }
}
</style>
