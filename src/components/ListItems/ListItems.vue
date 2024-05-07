<template>
  <div class="list">
    <div class="list-items">
      <Item v-for="item in itemList" :key="item.id" :item="item"/>
    </div>
    <LoadSpinner v-if="isLoading"/>
  </div>
</template>

<script lang="ts">
  import Item from '@/components/Item/Item.vue';
  import { LoadSpinner } from '@/components/common';
  import { useFetchItems } from './hooks/useFetchItems';
  import { useCheckScroll, useCheckRemainingWithoutScroll } from './hooks/utils';
import { ItemInt } from '@/types/Comment';

  export default {
    components: {
      Item,
      LoadSpinner,
    },
    setup() {
      const { itemList, errFetchItems, isLoading, totalCount, page } = useFetchItems();
      useCheckScroll({totalCount, itemList, page, isLoading });
      useCheckRemainingWithoutScroll<ItemInt>(totalCount, itemList, page);

      return {
        itemList,
        errFetchItems,
        isLoading,
        totalCount,
      };
    }
  }

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

  &-loader {
    border: 1px solid red;
  }
}
</style>
