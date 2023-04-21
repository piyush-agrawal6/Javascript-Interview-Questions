/**
 * ! Callback , callback hell , promises , async await
 */

// //synchronous
// executes line by line

// //asynchronous
// promises , setTimeout , async await act as async functions and run at last of the script

/**
 * * Promise / async await questions
 */
// console.log("Start");
// const a = new Promise((resolve, reject) => {
//   setInterval(() => {
//     let result = true;
//     if (result) resolve("Solved");
//     else reject("not solved");
//   }, 1000);
// });
// a.then((res) => {
//   console.log(res);
// })
//   .then((res) => {
//     console.log("Hello");
//   })
//   .then((res) => {
//     console.log("HEy");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("Stop");

// console.log("start");
// const pro = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });
// console.log("middle");
// pro.then((res) => {
//   console.log(res);
// });
// console.log("end");

// console.log("start");
// const fun = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
//   });
// console.log("middle");
// fun().then((res) => {
//   console.log(res);
// });
// console.log("end");

// //https://fakestoreapi.com/products
// async function a() {
//   let res = await fetch("https://fakestoreapi.com/products");
//   let data = await res.json();
//   printData(data);
// }
// function printData(data) {
//   //   data.forEach((elem) => {
//   //     console.log(data.price);
//   //   });
//   console.log(data);
// }

/**
 * * debouncing / throtling
 */
//what is debouncing ? Uses?
//what is throtling ? Uses?
