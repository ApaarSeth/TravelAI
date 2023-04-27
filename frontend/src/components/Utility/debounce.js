export const Debounce = (func, delay) => {
  let timer;
  return function () {
    let self = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(self, args);
    }, 1000);
  };
};
