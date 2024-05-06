import { Ref, watch } from "vue";

export const usePageWatching = (page: Ref<number>, fetchItems: () => void) => {
  watch(
    page,
    () => {
      fetchItems();
    }
  );
};
