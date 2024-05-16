import { ref } from "vue";

const useLoadingData = () => {
  const isLoading = ref<boolean>(false);
  function startLoading() {
    isLoading.value = true
  };
  function stopLoading() {
    isLoading.value = false;
  }

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
};

export default useLoadingData;
