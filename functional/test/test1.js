const FxJS = require("fxjs");
const _ = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");
const log = (a) => {
  return console.log(`${new Date()} : ${a}`);
};

const delay = (val) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(val);
    }, 1000);
  });
};
async function test_fp() {
  const list = [1, 3, 5, 6, 7, 9];
  return await _.go(
    list,
    L.map((a) => a + 100),
    L.map(delay),
    _.each(log)
  );
}
test_fp().then((ret) => console.log(ret));
/*
Fri Aug 23 2019 15:13:31 GMT+0900 (GMT+09:00) : 101 Fri Aug 23 2019 15:13:32 GMT+0900 (GMT+09:00) : 103 Fri Aug 23 2019 15:13:33 GMT+0900 (GMT+09:00) : 105 Fri Aug 23 2019 15:13:34 GMT+0900 (GMT+09:00) : 106 Fri Aug 23 2019 15:13:35 GMT+0900 (GMT+09:00) : 107 Fri Aug 23 2019 15:13:36 GMT+0900 (GMT+09:00) : 109 [ 101, 103, 105, 106, 107, 109 ]
*/
