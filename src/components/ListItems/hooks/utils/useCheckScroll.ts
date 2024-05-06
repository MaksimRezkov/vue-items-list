import { ItemInt } from "@/types/Comment";
import { throttle } from "@/utils";
import { Ref, onBeforeUnmount, onMounted } from "vue";

export const useCheckScroll = (totalCount: Ref<string | null>, itemList: Ref<ItemInt[]>, page: Ref<number>) => {
  const onScroll = () => {
    const isFetchedAll = totalCount.value && +totalCount.value === itemList.value.length;
    if (!totalCount.value || isFetchedAll) return;

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
      console.log('ADD ITEMS');
      page.value++;
    }
  
    // console.log('**********************************');
    // console.log('height', height);
    // console.log('screenHeight', screenHeight);
    // console.log('scrolled', scrolled);
    // console.log('threshold', threshold);
    // console.log('position', position);
    // console.log('***********************************');
  };

  const throttledOnScroll = throttle(100, onScroll);

  onMounted(() => {
    window.addEventListener('scroll', throttledOnScroll);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', throttledOnScroll);
  });
};
