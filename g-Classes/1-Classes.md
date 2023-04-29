## JavaScript Classes
- A JavaScript `class` is a blueprint for `creating objects`. 
- A class encapsulates data and functions that manipulate data.
- Unlike other programming languages such as Java and C#, JavaScript `classes` are syntactic sugar over the `prototypal inheritance`. 
- In other words, ES6 classes are just `special functions`.

## ES6 class declaration/Syntax
- JavaScript class is similar to the Javascript constructor function, and it is merely a syntactic sugar.
- The constructor function is defined as:
```ts
function Person () {
    this.name = 'John',
}

const person = new Person();
```
- Instead of using the function keyword, you use the `class keyword` for creating JS classes. 
- For example,
```ts
// creating a class
class Person {
  constructor(name) {
    this.name = name;
  }
}
```
- The `class keyword` is used to create a `class`.
- The properties are assigned in a `constructor function`.
- Now you can create an object. For example,
```ts
// creating a class

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const person = new Person('Jack');

console.log(person2.name); // Jack
```
- Here, person1 is a object of Person class.
- The `getName()` is called a `method` of the `Person class`. 
- Like a constructor function, you can call the methods of a class using the following syntax:
```ts
let name = person.getName();

console.log(name);  // prints Jack
```
- To verify the fact that classes are `special functions`, you can use the `typeof operator` of to check the type of the Person class.
```ts
console.log(typeof Person); // prints function
```
- `Note` : The constructor() method inside a class gets called automatically each time an object is created.

## 'use strict'
- Classes always follow 'use-strict'. 
- All the code inside the class is automatically in strict mode. 
- For example,
```ts
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    // date = new Date();  // This will not work
    const date = new Date(); // This will work
    return date.getFullYear() - this.year;
  }
}
```
- In "strict mode" you will get an error if you use a variable without declaring it.

## Hoisting
- A class should be defined before using it. Unlike functions and other JavaScript declarations, the class is not hoisted. 
- For example,
```ts
// accessing class
const p = new Person(); // ReferenceError

// defining class
class Person {
  constructor(name) {
    this.name = name;
  }
}
```
- As you can see, accessing a class before defining it throws an error.

