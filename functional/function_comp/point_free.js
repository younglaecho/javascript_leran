const { map, filter, pipe, values, go } = require("fxjs");
const L = require("fxjs");
const 친구들 = [
  {
    name: "연제호",
    do: "군인",
  },
  {
    name: "박종선",
    do: "회장",
  },
  {
    name: "윤성용",
    do: "개발자",
  },
  {
    name: "박동영",
    do: "개발자",
  },
];
const t = 친구들.map((e) => (e.do === "개발자" ? e : null)).filter((e) => e);
console.log(t);

const prop = (key) => (obj) => obj[key];
const propEqual = (value) => (key) => (obj) => prop(key)(obj) === value;

const t2 = go(친구들, L.filter(propEqual("개발자")("do")), L.takeAll);
console.log(t2);
/*
[ { name: '윤성용', do: '개발자' }, { name: '박동영', do: '개발자' } ] [ { name: '윤성용', do: '개발자' }, { name: '박동영', do: '개발자' } ] */
