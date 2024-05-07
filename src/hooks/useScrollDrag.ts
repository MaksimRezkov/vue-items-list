import { Ref } from "vue";

export const useScrollDrag = (scrolledNode: Ref<null | HTMLElement>) => {
  let isMouseDown = false;
  let mouseStartX = 0;
  let nodeCurrentScroll = 0;

  const onMouseDown = (e: MouseEvent) => {
    isMouseDown = true;
    mouseStartX = e.clientX;
    nodeCurrentScroll = scrolledNode.value?.scrollLeft ?? 0;
  };
  const onMouseUp = () => {
    isMouseDown = false;
  };
  const onMouseMove = (e: MouseEvent) => {
    if (isMouseDown && mouseStartX !== null && scrolledNode.value) {
      const scrolledValue = nodeCurrentScroll + -(e.clientX - mouseStartX);
      scrolledNode.value.scroll({ left: scrolledValue});
    }
  };

  return {
    onMouseDown,
    onMouseUp,
    onMouseMove,
  };
};
