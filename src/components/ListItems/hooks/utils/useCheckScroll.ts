import { UseCheckScrollArgsInt } from "@/types/ItemListTypes";
import { throttle } from "@/utils";
import { onBeforeUnmount, onMounted } from "vue";

export const useCheckScroll = (params: UseCheckScrollArgsInt) => {
  const { isLoading, itemList, page, totalCount } = params;
  const onScroll = () => {
    const isFetchedAll = totalCount.value && +totalCount.value === itemList.value.length;
    if (!totalCount.value || isFetchedAll || isLoading.value) return;

    // Высота документа и экрана
    const height = document.body.offsetHeight
    const screenHeight = window.innerHeight
  
    // Сколько пикселей уже проскроллили
    const scrolled = window.scrollY
  
    // Порог
    const threshold = height - screenHeight / 4
  
    // Низ экрана относительно страницы
    const position = scrolled + screenHeight

    if (position > threshold) {
      page.value++;
    }
  };

  const throttledOnScroll = throttle(100, onScroll);

  onMounted(() => {
    window.addEventListener('scroll', throttledOnScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', throttledOnScroll);
  });
};
