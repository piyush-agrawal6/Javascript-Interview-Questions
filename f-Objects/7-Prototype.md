## JavaScript Prototype
Before you learn prototypes, be sure to check these tutorials:
- JavaScript Objects
- JavaScript Constructor Function

In JavaScript, every `function` and `object` has a property named `prototype` by default. 
- For example :
```ts
function Person () {
    this.name = 'John'
}

const person = new Person()

console.log(Person.prototype); // prints { ... }
```
- In the above example, we are trying to access the `prototype property` of a `Person` constructor function.
- Since the prototype property has no value at the moment, it shows an empty object `{ ... }` .

## Prototype Inheritance
- In JavaScript, a prototype can be used to add properties and methods to a constructor function. 
- And objects inherit properties and methods from a prototype. 
- It property of objects is called `Prototype Inheritance`
- For example,
```ts
function Person () {
    this.age = 23
}

const person = new Person();

Person.prototype.gender = 'male';

console.log(Person.prototype);
console.log(person.gender);
```

- Output :
```ts
{ gender: "male" }
male
```
-The object `person` inherits the property `gender` from the `prototype` property of `Person` constructor function.

## Add Methods and Properties to a Constructor Function Using Prototype
- You can also add new methods and properties to a constructor function using prototype. 
- For example,
```ts
function Person () {
    this.age = 23
}
const person = new Person();

// adding a property to the constructor function
Person.prototype.name = "Jane"

// adding a method to the constructor function
Person.prototype.greet = function() {
    console.log('hello' + ' ' +  this.name);
}

console.log(person.name); // Jane
person.greet(); // hello Jane
```
