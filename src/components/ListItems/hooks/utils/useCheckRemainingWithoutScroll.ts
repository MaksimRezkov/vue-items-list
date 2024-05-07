import { Ref, nextTick, watch } from "vue";

interface UseCheckRemainingWithoutScrollArgs<T> {
  totalCount: Ref<string | null>,
  itemList: Ref<T[]>,
  page: Ref<number>,
  listWrapper: Ref<HTMLElement | null>,
  limit: Ref<number>,
}

/** Проверка при первичной подгрузке того, что загружаемый контент создал скролл, если скролла нет,
 * вызывает подгрузку достаточного кол-ва элементов;
 * используем nextTick, чтобы вычисление isNoScroll произошло после того как спсиок отрисуется
 */
export const useCheckRemainingWithoutScroll = <T>(params: UseCheckRemainingWithoutScrollArgs<T>) => {
  const { itemList, limit, listWrapper, page, totalCount } = params;
  watch(
    totalCount,
    () => {
      nextTick(() => {
        const docHeightVisible = document.documentElement.clientHeight;
        const isNoScroll = document.documentElement.scrollHeight <= docHeightVisible;
        const isHasData = totalCount.value !== null && itemList.value.length;
        const isNotAllItems = totalCount?.value && +totalCount?.value > itemList.value.length;
        
        if (isHasData && isNotAllItems && isNoScroll && listWrapper.value) {
          // высота блока списка
          const listHeight = listWrapper.value.clientHeight;
          // расстояние от нижней границы списка до верха документа
          const listBottomToTop = listWrapper.value.offsetTop + listHeight;
          // вычисляем во сколько раз нужно растянуть список
          const newLimit = Math.ceil((docHeightVisible - listBottomToTop) / listHeight) * limit.value;
          limit.value < newLimit && (limit.value = newLimit);
          page.value++;
        }
      });
    },
  )
};
