/**
 * ! Array Methods
 */
// length , reverse , sort , fill , toString , pop , shift , push , unshift , concat , splice , lastIndexOf , slice , find , includes , reduce , filter , map , forEach , some

/**
 * ! Map , Filter , Reduce , forEach
 */

/**
 * * map
 */
// //what is map ?
// The map() method creates a new array with the results of applying a function for every array element.
//Callback takes 3 element -- CurrentElement , index , arr
// //example
// const nums = [1, 2, 3, 4];
// const multiply = nums.map((elem, i, arr) => {
//   return elem * 2;
// });
// console.log(multiply);

/**
 * * filter
 */
// //what is filter ?
// The filter() method returns a new array with all elements that pass the test defined by the given function.Callback takes 3 element -- CurrentElement , index , arr
// //example
// const nums = [1, 2, 3, 4];
// const greaterThan = nums.filter((elem, i, arr) => {
//   return elem > 2;
// });
// console.log(greaterThan);

/**
 * * reduce
 */
// //what is reduce ?
// The reduce() method executes a reducer function on each element of the array and returns a single output value.Callback takes 4 element -- accumulator,curr,i,arr and an initial value
// //example
// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, elem, i, arr) => {
//   return (acc += elem);
// }, 0);
// console.log(sum);

/**
 * * forEach
 */
// //what is forEach ?
// The forEach() method executes a provided function for each array element.
//Callback takes 3 element -- CurrentElement , index , arr
// It does not return an array.
// //example
// const nums = [1, 2, 3, 4];
// nums.forEach((elem, i, arr) => {
//   console.log(elem,i);
// });

/**
 * * map polyfills
 */
// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };
// const nums = [1, 2, 3, 4];
// const multiply = nums.myMap((elem, i, arr) => {
//   return elem * 2;
// });
// console.log(multiply);

/**
 * * map vs forEach
 */
//  These are the methods that are used to iterate on an array, more technically they invoke the provided callback function for every element of an array.
// Parameters:
// currentElement: This is the current element that is being processed in the callback.
// indexOfElement: The index of that current element inside the array.
// array: The array on which the whole operation is being performed.
// // Differences between forEach and map methods:
// // 1
// The forEach() method does not create a new array based on the given array.
// The map() method creates an entirely new array.
// // 2
// The forEach() method returns “undefined“.
// The map() method returns the newly created array according to the provided callback function.
// // 3
// The forEach() method doesn’t return anything hence the method chaining technique cannot be applied here.
// With the map() method, we can chain the other array Instance methods i.e returned value of the map() method invokes the next method in the chain.
// // 4.
// It can change the original array
// It  does not change the original array.
// // 5.
// It is not executed for empty elements.
// It calls a function once for each element in an array.

/**
 * * Questions
 */

// //1
// Return only details of those who scored more than 60 marks and roll no. greater than 15
// sum of marks
// return name with marks more than 60
// let students = [
//   { name: "Piyush", rollNumber: 31, marks: 80 },
//   { name: "Jenny", rollNumber: 15, marks: 69 },
//   { name: "Dilpreet", rollNumber: 7, marks: 55 },
//   { name: "Kaushal", rollNumber: 16, marks: 35 },
// ];

/**
 * ! call , apply , bind
 */

/**
 * * call
 */
// //what is call ?
// Call is a function that helps you change the context of the invoking function. It helps you replace the value of "this" inside a function with whatever value you want.
//call is a function that you use to change the value of this inside a function and execute it with the arguments provided.
// //example
// let obj = { name: "Joy" };
// function sayHello(age) {
//   return "Hello" + " " + this.name + " " + age;
// }
// console.log(sayHello.call(obj, 22));

/**
 * * apply
 */
// //what is apply ?
//Apply is very similar to the call function. The only difference is that in apply you can pass the argument list as an array.
// //example
// let obj = { name: "Joy" };
// function sayHello(age, year) {
//   return "Hello" + " " + this.name + " " + age + " " + year;
// }
// console.log(sayHello.apply(obj, [22, 2022]));

/**
 * * bind
 */
// //what is apply ?
//Bind is a function that helps you create another re usable function that you can execute later by passing the arguments
// //example
// let obj = { name: "Joy" };
// function sayHello(age, year) {
//   return "Hello" + " " + this.name + " " + age + " " + year;
// }
// let bindFunc = sayHello.bind(obj);
// console.log(bindFunc(22, 2022));

/**
 * * Questions
 */
// //1
// let obj = { name: "Joy" };
// function sayHello(age) {
//   return this.name + " " + age;
// }
// console.log(sayHello.call(obj, 22));
// console.log(sayHello.apply(obj, [22]));
// console.log(sayHello.bind(obj, 22));

// //2
// let age = 22;
// let obj1 = {
//   age: 20,
//   printAge: function () {
//     console.log(this.age);
//   },
// };
// let obj2 = { age: 24 };
// obj1.printAge.call(obj2);

// //3
// var status = "Hii";
// setTimeout(() => {
//   const status = "Hello";
//   const data = {
//     status: "Hey",
//     getStatus() {
//       return this.status;
//     },
//   };
//   console.log(data.getStatus());
// }, 0);

// //4
// function f() {
//   console.log(this.name);
// }
// let a = f.bind({ name: "Joy" }).bind({ name: "Someone" });
// a();

