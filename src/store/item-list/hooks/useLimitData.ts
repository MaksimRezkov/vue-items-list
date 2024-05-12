import { ref } from "vue";

const useLimitData = () => {
  const limit = ref<number>(10);
  function setLimit(value: number) {
    limit.value = value;
  };

  return {
    limit,
    setLimit,
  };
};

export default useLimitData;
