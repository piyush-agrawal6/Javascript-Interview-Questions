/**
 * !  function declaration or regular function
 */
// function square(a) {
//   console.log(a * a);
// }
// square(5);
/**
 * !  function expression or anonymous function
 */
// const square = function (a) {
//   return a * a;
// };

/**
 * !  arrow function
 */
// let sum = (a) => {
//   return a * a;
// };

/**
 * !   IIFE - immediately invoked function expression
 */

// ((a) => {
//   console.log(a * a);
// })(5);

// (function square(x) {
//   return (function printSquare(y) {
//     console.log(x * x + y);
//   })(1);
// })(5);


// (function a(string) {
//   console.log("Heyy" + string);
// })("Piyush");
// function a() {
//   (function b() {
//     console.log("Heyy");
//   })();
// }
// a();

/**
 * !  function scope
 */
// var a = 1;
// var b = 2;
// var c = 3;
// function sum() {
//   var b = 10;
//   var c = 20;
//   console.log(a + b + c);
// }
// sum();

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

/**
 * !  function hoisting
 */
// square(5);
// function square(a) {
//   console.log(a * a);
// }

// square();
// function square() {
//   console.log(x);
//   var x = 5;
//   console.log("Heyy")
// }

// var x = 10;
// function square() {
//   console.log(x);
//   var x = 1;
// }
// square();

/**
 * ! params vs arguments
 */
// function square(params) {
//   console.log(params);
// }
// var arguments = 10;
// square(arguments);

/**
 * ! spread vs rest operators
 */
// function square(...a) {
//   console.log(a);
//   console.log(a[0], a[1], a[2]);
// }
// let num = [1, 2, 3];
// square(...num);

// function square(a, x, y, ...rest) {
//   console.log(x, y);
//   console.log(rest);
// }
// square(1, 2, 3, 4);

// function numbers(...rest) {
//   console.log(rest[rest.length - 1]);
// }
// numbers(1, 2, 3, 4, 5, 6, 7, 8);

/**
 * ! callback function
 */
/**
 * * square is callback function
 */
// function square(a) {
//   return a * a;
// }
// function printSquare(callback) {
//   console.log(callback(5));
// }
// printSquare(square);

/**
 * ! arrow function vs regular function
 */
/**
 * * 1) Syntax
 */
/**
 * * 2) return keyword
 */
// let square = (a) =>  a * a;
/**
 * * 3) arguments keyword
 */
// function square1() {
//   console.log(arguments);
// }
// square1(1, 2, 3);

// let square2 = () => {
//   console.log(arguments);
// };
// square2(1, 2, 3);
/**
 * * 4) this keyword
 */
// let users = {
//   userName: "Heyy",
//   rf: function a() {
//     console.log(this.userName);
//   },
//   af: () => {
//     console.log(this.userName);
//   },
// };
// users.rf();
// users.af();

/**
 * ! extra questions
 */

// function square(a) {
//   console.log(a);
// }
// square();
// function square() {
//   console.log("Heyy");
// }
// square();

// function a() {
//   b = 10;
// }
// console.log(b);
// {
//   c = 10;
// }
// console.log(c);

// var a = [1, 2, 3, 4];
// var b = [2, 3];
// function add(a, b) {
//   let c = [];
//   a.map((e, i) => {
//     b[i] ? c.push(e + b[i]) : c.push(a[i]);
//   });
//   return console.log(c);
// }
// add(a, b);

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

// function sum(a, b) {
//   console.log(a+b)
// }
// sum(1, "2");

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// function sayHi() {
//   return (() => 0)();
// }
// console.log(typeof sayHi());

// console.log(typeof typeof 1);

// console.log(!!null);
// console.log(!!"");
// console.log(!!1);

// function sum() {
//   return arguments.reduce((a, b) => a + b);
// }
// console.log(sum(1, 2, 3));
// function sum(...arguments) {
//   return arguments.reduce((a, b) => a + b);
// }
// console.log(sum(1, 2, 3));

// console.log(1 == '1');
// console.log(false == '0');
// console.log(true == '1');
// console.log('1' == '01');
// console.log(10 == 5 + 5);
// console.log(!"0")

// console.log("1" - -"1");
// console.log("1" + -"1");

// let lang = "javascript";
// (function () {
//   let lang = "java";
// })();
// console.log(lang);
// (function () {
//   var lang2 = "java";
// })();
// console.log(lang2);

// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);

// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// function getAge(...args) {
//   console.log(typeof args);
// }
// getAge(21);
