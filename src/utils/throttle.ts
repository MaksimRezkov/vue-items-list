export const throttle = <T>(delay: number, targetFn: (params: T) => void) => {
  let timerId: any = null;
  return function(params: T) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      targetFn(params);
    }, delay);
  };
};
