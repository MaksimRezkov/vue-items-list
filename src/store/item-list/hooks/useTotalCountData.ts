import { ref } from "vue";

const useTotalCountData = () => {
  const totalCount = ref<string | null>(null);
  function setTotalCount(value: string | null) {
    totalCount.value = value;
  }

  return {
    totalCount,
    setTotalCount,
  };
};

export default useTotalCountData;
