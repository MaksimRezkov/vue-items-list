import { AxiosError } from "axios";
import { ref } from "vue";

const useErrorData = () => {
  const errFetchItems = ref<AxiosError | null>(null);
  function setErrFetchItems(value: AxiosError | null) {
    errFetchItems.value = value;
  };

  return {
    errFetchItems,
    setErrFetchItems,
  };
};

export default useErrorData;
