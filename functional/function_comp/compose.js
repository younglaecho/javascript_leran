const R = require("ramda");
const ret = R.compose(Math.abs, R.add(1), R.multiply(2))(-4);
console.log(ret);
