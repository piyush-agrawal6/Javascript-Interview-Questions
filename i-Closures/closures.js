/**
 * ! Closures
 */
/**
 * * what is closure ??
 */
//  It makes it possible for a function to have "private" variables. JavaScript closure is used to control what is and isn't in scope in a particular function, along with which variables are shared between Child functions in the same containing scope.

// Closure is an ability of a function to remember the variables and functions that are declared in its outer scope which can be shared with child functions.

// //Example
// let name = "Byee";
// function a() {

//   let name = "Heyy";
//   return function b() {
//     console.log(name);
//   };
// }

/**
 * * what is diff btw scope and closure ??
 */
//  Whenever you create a function within another function, then the inner function is closure. This closure is usually returned so you can use the outer function’s variables at a later time. Whereas a scope in JavaScript defines what variables you have access to. There are two kinds of scope – global scope and local scope.

/**
 * * what are the advantages of closure ??
 */
//  --> Closure enables the use of nested functions that are used to get the values created in the  execution context of that of the parent function.
//  -->They can prove as a perfect solution while solving a problem of hierarchy in any program.
//  --> They have huge importance as far as functional programming is concerned. It solves the for loop problem of functional programming.
// --> It is also used to simulate private scope for variables.

/**
 *
 * * Lexical Scope
 */
// let name = "Joy";
// function printName() {
//   console.log(name);
// }
// printName();

/**
 * * Closure
 */
// var a = "joy";
// //outer scope
// function printName() {
// //     var a = "Piyush";
//   //inner scope
//   function consoleName() {
//     //child scope
//     console.log(a);
//   }
//   consoleName();
// }
// printName();

// //curring
//Currying is an advanced technique to transform a function of arguments n, to n functions of one or fewer arguments.
// function printName(a) {
//   function consoleName() {
//     console.log(a);
//   }
//   return consoleName;
// }
// printName("piyush")();

// //Closure Scope Chaining  // Curring
// var a = 10;
// function sum(a) {
//   return function sum1(b) {
//     return function sum2(c) {
//       return function sum3(d) {
//         console.log(a + b + c + d);
//       };
//     };
//   };
// }
// sum(a)(1)(2)(3);

/**
 * * Questions
 */

//1
// let count = 0;
// (function printcount() {
//   if (count == 0) {
//     let count = 1;
//     console.log(count);
//   }
//   console.log(count);
// })();

//2
// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   inner(i);
// }

// for (var i = 0; i < 5; i++) {
//   function inner(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   inner(i);
// }

// //3
// // make a counter
// function count() {
//   let b = 0;
//   return function counter(a) {
//     b += a;
//     console.log(b);
//   };
// }
// let c = count()();
// c(5);
// c(5);
// c(5);

/**
 * * Curring
 */

// //4
// // sum(1)(2)(3)
// function sum(x) {
//   return function b(y) {
//     return function c(z) {
//       console.log(x + y + z);
//     };
//   };
// }
// sum(1)(2)(3)

// //5
// evaluate("sub")(2)(6)

/**
 * * Infinite Curring
 */
// // 6
// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }
// console.log(add(1)(2)(3)(5)(4)(6)())

/**
 * ! Questions
 */

// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a);
//   })(1);
// })(0);

// // Counter and Display function
// function counter() {
//   let count = 0;
//   function inc() {
//     count++;
//   }
//   function log() {
//     console.log("count is " + " " + count);
//   }
//   return {
//     inc,
//     log,
//   };
// }
// let { inc, log } = counter();
// inc();
// inc();
// inc();
// inc();
// log();

// function createBase(baseNumber) {
//   return function (N) {
//     return baseNumber + N;
//   };
// }
// var addSix = createBase(6);
// addSix(10);
// addSix(21);
