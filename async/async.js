
// function increase (number, callback) {
//   setTimeout(() => {
//     const result = number +10;
//     if (callback) {
//       callback(result);
//     }
//   }, 1000)
// }

// increase(0, result => {
//   console.log(result)
//   increase(result, result => {
//     console.log(result)
//     increase(result, result => {
//       console.log(result)
//       increase(result, result => {
//         console.log(result)
//         increase(result, result => {
//           console.log(result)
//         })
//       })
//     })
//   })
// })

function increase(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 10;
      if(result > 50) {
        const e = new Error('NumberTooBig');
        return reject(e);
      }
      resolve(result);
    }, 1000);
  });
  return promise
} 

// increase(0)
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })
//   .then(number => {
//     console.log(number);
//     return increase(number);
//   })

async function runTasks() {
  try {
    let result = await increase(0);
    console.log(result);
    result = await increase(result);
    console.log(result)
    result = await increase(result);
    console.log(result)
    result = await increase(result);
    console.log(result)
    result = await increase(result);
    console.log(result)
    result = await increase(result);
    console.log(result)
    result = await increase(result);
    console.log(result)
    result = await increase(result);
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}

runTasks()