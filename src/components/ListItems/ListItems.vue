<template>
  <div class="list">
    <div v-if="!isLoading" class="list-items">
      <Item v-for="item in itemList" :key="item.id" :item="item"/>
    </div>
    <div v-else class="list-loader">
      <h2>Loading...</h2>
    </div>
  </div>
</template>

<script lang="ts">
  import Item from '@/components/Item/Item.vue';
  import { useFetchItems } from './hooks/useFetchItems';

  export default {
    components: {
      Item,
    },
    setup() {
      const { itemList, page, errFetchItems, isLoading } = useFetchItems();
      const incrementPage = () => {
        page.value++;
      };

      return {
        itemList,
        incrementPage,
        errFetchItems,
        isLoading,
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
