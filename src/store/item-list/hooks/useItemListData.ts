import { ItemInt } from "@/types/Comment";
import { ref } from "vue";

const useItemListData = () => {
  const itemList = ref<ItemInt[]>([]);
  function addItems(newItems: ItemInt[]) {
    itemList.value.push(...newItems);
  };
  function clearItemList() {
    itemList.value = [];
  };
  function addItem(item: ItemInt) {
    itemList.value.push(item);
  }

  return {
    itemList,
    addItems,
    clearItemList,
    addItem,
  };
};

export default useItemListData;
