const R = require("ramda");
const f = R.pipe(R.negate, R.inc);
console.log(f(3));
