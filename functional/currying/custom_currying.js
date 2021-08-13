const k_curry = (fn) => (a) => (b) => fn(a, b);
const f = k_curry((a, b) => a + b);
const f_c = f(1);
const ret = f_c(2);
console.log(ret);
