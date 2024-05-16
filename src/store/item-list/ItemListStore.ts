import { defineStore } from "pinia";
import useItemListData from "./hooks/useItemListData";
import usePageData from "./hooks/usePageData";
import useLimitData from "./hooks/useLimitData";
import useLoadingData from "./hooks/useLoadingData";
import useErrorData from "./hooks/useErrorData";
import useTotalCountData from "./hooks/useTotalCountData";
import { ItemListStoreSchemaInt } from "@/types/ItemListTypes";

export enum StoreKeys {
  ITEM_LIST = 'itemList'
}

export const useItemListStore = defineStore<StoreKeys, ItemListStoreSchemaInt>(StoreKeys.ITEM_LIST, () => {
  const { addItem, addItems, clearItemList, itemList } = useItemListData();
  const { page, setPage } = usePageData();
  const { limit, setLimit } = useLimitData();
  const { isLoading, startLoading, stopLoading } = useLoadingData();
  const { errFetchItems, setErrFetchItems } = useErrorData();
  const { setTotalCount, totalCount } = useTotalCountData();

  return {
    itemList,
    addItem,
    addItems,
    clearItemList,

    page,
    setPage,

    limit,
    setLimit,

    isLoading,
    startLoading,
    stopLoading,

    errFetchItems,
    setErrFetchItems,

    totalCount,
    setTotalCount,
  };
});
