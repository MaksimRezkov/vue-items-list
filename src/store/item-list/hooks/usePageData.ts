import { ref } from "vue";

const usePageData = () => {
  const page = ref<number>(1);
  function setPage(value: number) {
    page.value = value;
  }

  return {
    page,
    setPage,
  };
};

export default usePageData;
