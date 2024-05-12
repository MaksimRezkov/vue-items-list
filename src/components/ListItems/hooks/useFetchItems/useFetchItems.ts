import { apiJSONPlaceholderService } from "@/api/apiService/ApiJSONPlaceholderService";
import { ItemInt } from "@/types/Comment";
import { AxiosError } from "axios";
import { onMounted } from "vue";
import { usePageWatching } from "./usePageWatching";
import { useItemListStore } from "@/store";
import { storeToRefs } from "pinia";

export const useFetchItems = () => {
  const store = useItemListStore();
  const {
    startLoading,
    stopLoading,
    setErrFetchItems,
    setTotalCount,
    addItems,
  } = store;
  const {
    page,
    limit,
  } = storeToRefs(store);

  const fetchItems = () => {
    startLoading();
    setErrFetchItems(null);
    apiJSONPlaceholderService.getCommentsByPage<ItemInt[]>({ page: page.value, limit: limit.value })
      .then(res => {
        const { data, headers } = res;
        setTotalCount(headers['x-total-count'] as string);
        addItems(data);
      })
      .catch((err: AxiosError) => {
        setErrFetchItems(err);
      })
      .finally(() => {
        stopLoading();
      });
  };

  onMounted(() => {
    fetchItems();
  });
  usePageWatching(page, fetchItems);
};
