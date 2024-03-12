const memo = (fn) => {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);

      cache[key] = result;

      return result;
    }
  };
};

const hardSum = (a, b) => a + b;

const f = memo(hardSum);
console.log(f(1, 2));
console.log(f(1, 2));
console.log(f(3, 4));
console.log(f(3, 4));
