// const job_1 = () => {
//   const b = Math.random() * 100;
//   setTimeout(() => {
//     console.log(1);
//   }, b);
// };
// const job_2 = () => {
//   const b = Math.random() * 100;
//   setTimeout(() => {
//     console.log(2);
//   }, b);
// };
// const job_3 = () => {
//   const b = Math.random() * 100;
//   setTimeout(() => {
//     console.log(3);
//   }, b);
// };
// job_1();
// job_2();
// job_3();
// console.log("Hi!");
// setTimeout(function timeout() {
//   console.log("async function1 complete");
// }, 6001);
// setTimeout(function timeout() {
//   console.log("async function2 complete");
// }, 5000);
// console.log("kundol!");

// const job_1 = () => {
//   const b = Math.random() * 100;
//   setTimeout(() => {
//     console.log(1);
//     job_2();
//   }, b);
// };
// const job_2 = () => {
//   const b = Math.random() * 100;
//   setTimeout(() => {
//     console.log(2);
//     job_3();
//   }, b);
// };
// const job_3 = () => {
//   const b = Math.random() * 100;
//   setTimeout(() => {
//     console.log(3);
//   }, b);
// };
// job_1();

// const a = (c = "네이버") => {
//   return new Promise((resolve, reject) => {
//     //비동기 함수로직
//     setTimeout(() => {
//       console.log(`${c}로부터 받은 사랑`);
//       resolve(`${c}로부터 받은 사랑`);
//     }, 1 * 1000);
//   });
// };
// const b = () => {
//   return new Promise((res, rej) => {
//     console.log("이것이 바로 Promise");
//     res("");
//   });
// };
// a("씨벌")
//   .then((ret) => {
//     console.log(ret);
//     return a(`카카오`);
//   })
//   .then((ret) => {
//     console.log(ret);
//     return b();
//   });

// const a = (para) => {
//   return new Promise((resolve, reject) => {
//     console.log(`값은 ${para}`);
//     resolve(para);
//   });
// };
// const b = (para) => {
//   return new Promise((resolve, reject) => {
//     console.log(`값은? ${para}`);
//     resolve(para);
//   });
// };
// a().then(b);

// const a = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve(1);
//     }, Math.random() * 100);
//   });
// };
// const b = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(2);
//       resolve(2);
//     }, Math.random() * 100);
//   });
// };
// const c = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(3);
//       resolve(3);
//     }, Math.random() * 100);
//   });
// };
// const main = async () => {
//   await a();
//   await b();
//   await c();
// };
// main();

const obj = {
  userName: "cho",
  age: 27,
  introduce: function () {
    console.log(`안녕하세요 저는 ${this.age}살 ${this.userName}입니다.`);
  },
};
console.log(obj.userName);
obj.introduce();
