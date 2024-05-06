import { apiJSONPlaceholderService } from "@/api/apiService/ApiJSONPlaceholderService";
import { ItemInt } from "@/types/Comment";
import { AxiosError } from "axios";
import { Ref, onMounted } from "vue";
import { usePageWatching } from "./usePageWatching";
import { useFetchItemsData } from "./useFetchItemsData";

export type UseFetchItemsRes = {
  itemList: Ref<ItemInt[]>,
  errFetchItems: Ref<AxiosError | null>,
  page: Ref<number>,
  isLoading: Ref<boolean>,
};

export const useFetchItems: () => UseFetchItemsRes = () => {
  const { itemList, errFetchItems, limit, page, isLoading } = useFetchItemsData();

  const fetchItems = () => {
    isLoading.value = true;
    errFetchItems.value = null;
    apiJSONPlaceholderService.getCommentsByPage<ItemInt[]>({ page: page.value, limit: limit.value })
      .then(res => {
        setTimeout(() => {
          const { data } = res;
          itemList.value.push(...data);
        }, 2500);
      })
      .catch((err: AxiosError) => {
        errFetchItems.value = err;
      })
      .finally(() => {
        setTimeout(() => {
          isLoading.value = false;
        }, 2500);
      });
  };

  onMounted(() => {
    fetchItems();
  });
  usePageWatching(page, fetchItems);

  return {
    itemList,
    page,
    errFetchItems,
    isLoading,
  };
};
