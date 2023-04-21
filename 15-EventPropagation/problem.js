let sum = 0;
let call = (n) => {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

let memoize = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("Cache");
      return cache[n];
    } else {
      console.log("Calculating");
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};

console.time();
let res = memoize(call);
console.log(res(5));
console.timeEnd();

console.time();
console.log(res(5));
console.timeEnd();

console.time();
console.log(res(5));
console.timeEnd();
