import { ItemInt } from "@/types/Item";
import { AxiosError } from "axios";
import { ref } from "vue";
import { UseFetchItemsRes } from "./useFetchItems";

export const useFetchItemsData: () => UseFetchItemsRes = () => {
  const itemList = ref<ItemInt[]>([]);
  const page = ref<number>(1);
  const limit = ref<number>(10);
  const isLoading = ref<boolean>(false);
  const errFetchItems = ref<AxiosError | null>(null);
  const totalCount = ref<string | null>(null);

  return {
    itemList,
    page,
    limit,
    isLoading,
    errFetchItems,
    totalCount,
  };
};
