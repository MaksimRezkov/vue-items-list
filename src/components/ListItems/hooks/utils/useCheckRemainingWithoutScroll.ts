import { Ref, watch } from "vue";

export const useCheckRemainingWithoutScroll = <T>(totalCount: Ref<string | null>, items: Ref<T[]>, page: Ref<number>) => {
  watch(
    totalCount,
    () => {
      console.log("WATCH");
      const isNoScroll = document.body.scrollHeight === document.body.offsetHeight;
      if (totalCount.value && +totalCount.value > items.value.length && isNoScroll) {
        page.value++;
      }
    },
    {
      immediate: true,
    },
  )
};
