/**
 * ! Objects
 */

// //examples
// let key = "status";
// let value = "married";
// const user = {
//   name: "joy",
//   age: 22,
//   "user gender": "male",
//   [key]: value,
// };
// user.name = "Piyush";
// delete user.age;
// console.log(user);
// console.log(user["user gender"]);
// delete user["user gender"];
// console.log(user);
// for (key in user) {
//   console.log(key, user[key]);
// }

// const obj = {
//   a: "1",
//   b: "2",
//   a: "3",
// };
// console.log(obj)

// let nums = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: "joy",
// };
// function multiply(obj) {
//   let mul = 1;
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       mul *= obj[key];
//     }
//   }
//   console.log(mul)
// }
// multiply(nums);

// let nums = {
//   a: 1,
//   b: 2,
//   age: 3,
// };
// const user = {
//   name: "joy",
//   age: 22,
//   "user gender": "male",
//   ...nums,
// };
// console.log(user)

// arrowfunction
// normal func this keyword

/**
 * * Destructuring
 */
// const user = {
//   name: "joy",
//   age: 22,
//   full: {
//     first: "joy",
//     last: "Agrawal",
//   },  
// };
// const name = "piyush";
// const {
//   name: myName,
//   full: { first, last },
// } = user;
// console.log(myName);
// console.log(last);


/**
 * * questions
 */

// //  You have been given a list of objects and you will have to filter the objects on the basis of key value pair.
// // Input: customFilter(list,'reading','5')
// //  Output:
// // [
// //   { date: "13/1/2011", reading: 5, id: 20053 },
// //   { date: "13/1/2011", reading: 5, id: 20051 },
// // ];
// var list = [
//   { date: "12/1/2011", reading: 3, id: 20055 },
//   { date: "13/1/2011", reading: 5, id: 20053 },
//   { date: "14/1/2011", reading: 6, id: 45652 },
//   { date: "13/1/2011", reading: 5, id: 20051 },
// ];
// // Complete the function customFilter
// function customFilter(list, keyName, value) {}

// 1. What are JavaScript objects?

// 7. How can we prevent adding properties to an object in JavaScript?
// We can prevent adding properties to an object in JavaScript by using the Object.seal() or Object.preventExtensions() methods. Object.seal() will prevent any new properties from being added to an object, but will not prevent existing properties from being changed. Object.preventExtensions() will prevent any new properties from being added, but will also prevent existing properties from being changed or deleted.

// 15. What is the significance of the “this” keyword in JavaScript?
// The “this” keyword in JavaScript is used to refer to the current object that is being worked with. This can be useful when you need to access data or methods associated with the current object.

// 19. What’s the best way to convert JSON into an object in Javascript?
// The best way to convert JSON into an object in Javascript is to use the JSON.parse() function. This function takes a JSON string and converts it into an object.

// 20. How can I loop through all keys in an object in Javascript?
// You can use the Object.keys() method to loop through all keys in an object in Javascript. This method will return an array of all the keys in the object, which you can then use a for loop to iterate through.

// Question 7. What Are The Javascript Native Objects?
// JavaScript has several built-in or native objects. These objects are accessible anywhere in your program and will work the same way in any browser running in any operating system.
// Here is the list of all important JavaScript Native Objects −
// JavaScript Number Object
// JavaScript Boolean Object
// JavaScript String Object
// JavaScript Array Object
// JavaScript Date Object
// JavaScript Math Object

// Object() constructor
// Store an empty Object object in d
// let obj = {
//   joy: "name",
// };
// var d = new Object({...obj});
// var d = new Object(null);
// var d = new Object(undefined);
// obj.joy="joy"
// console.log(d);

//object.create()
// var a = Object.create();
// console.log(a);

//shallow copy
//deep cody
// Object.assign({},obj)
// {...obj}
//method

// function a() {
//   return {
//     name: "joy",
//     title: this,
//   };
// }
// let b = a();
// // console.log(b);
// // console.log(b.name);
// // console.log(b.title);
// console.log(b.title.name);

/**
 * * extras
 */
//  literal mehtod for creating object
// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// console.log(student);
// if we want only key and value seperatly
// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// destruction way of object
// let student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// const { name } = student;
// console.log("name:", name);
// let key = Object.keys(student);
// let value = Object.values(student);
// console.log(key, value);
// deleteing any one keys from object
// examp_1
// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// examp_2;
// let func = (function (a) {
//   delete a;
//   return a;
// })(5);
// console.log("func:", func);
// delete student.name;
// console.log("student:", student);
// if readingstatus is true show the book
// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];
// for (let i = 0; i < library.length; i++) {
//   let newone = library[i].readingStatus == true ? library[i].author : "";
//   console.log("  newone:", newone);
// }
// just outupt type checking
// console.log("game:", game);
// const game = {
//   a: "cricket",
//   b: "footbal",
//   c: "vollybal",
//   a: "basketball",
// };
// create function multiply by two in all numric?
// const num = {
//   a: 100,
//   c: 200,
//   a: "basketball",
// };
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// a[b] = 320;
// a[c] = 380;
// // a-output
// what is stringify and parse?
// const user = {
//   skill: "js",
//   tool: "git",
// };
// what is the output?
// const user = { name: "rocky", age: 25 };
// const admin = { ...user, admin: true };
// const adminq = [{ admin: true, ...user }];
// console.log("admin:", adminq);
// let nums = {
//   a: 1,
//   b: 2,
//   age: 3,
// };
// const user = {
//   name: "joy",
//   age: 22,
//   "user gender": "male",
//   ...nums,
// };
// console.log(user);