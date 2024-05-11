import { ItemInt } from "@/types/Comment";
import { AxiosError } from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

const useItemListStore = defineStore('itemList', () => {
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
});
