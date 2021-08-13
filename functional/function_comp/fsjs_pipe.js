const { map, filter, pipe } = require("fxjs");
const f_pipe = pipe(
  map((a) => a + 1),
  filter((a) => a % 2)
);

const _ret = f_pipe([1, 2, 3, 4]);
