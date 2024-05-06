export const throttle = (delay: number, targetFn: () => void) => {
  let timerId: any = null;
  return function() {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      targetFn();
    }, delay);
  };
};
