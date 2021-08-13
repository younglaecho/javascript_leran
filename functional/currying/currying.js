// const R = require("ramda");
// const a = R.add(1);
// const b = a(2);
// console.log(b); //3

// ramda를 이용한 예
const R = require("ramda");
const addFourNumbers = (a, b, c, d) => a + b + c + d;
const curriedAddFourNumbers = R.curry(addFourNumbers);
const f = curriedAddFourNumbers(1, 2);

const g = f(3);
console.log(g(4)); //=> 10
