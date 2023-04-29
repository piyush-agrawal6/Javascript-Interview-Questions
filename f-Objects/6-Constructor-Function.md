## JavaScript Constructor Function
- In JavaScript, a `constructor function` is used to `create objects` .
- For example,
```ts
// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person = new Person();
```

- In the above example, function `Person(`) is an object `constructor function`.
- To create an object from a constructor function, we use the `new` keyword.
- `Note` : It is considered a good practice to capitalize the first letter of your constructor function.

## Create Multiple Objects with Constructor Function
- In JavaScript, you can create multiple objects from a single constructor function. 
- For example,
```ts
function Person () {
    this.name = 'John',
    this.age = 23,
}

const person1 = new Person();
const person2 = new Person();

console.log(person1.name);  // prints John
console.log(person2.age);  // prints 23
```

## JavaScript this Keyword
- In JavaScript, when this keyword is used in a constructor function, this refers to the object when the object is created.
- For example,
```ts
function Person () {
    this.name = 'John',
}

const person1 = new Person();

console.log(person1.name);  // John
```
- Hence, when an object accesses the properties, it can directly access the property as person1.name.

## JavaScript Constructor Function Parameters
- You can also create a constructor function with parameters. 
- For example,
```ts
function Person (name, age) {
    this.name = name,
    this.age = age,
}

const person1 = new Person('John', 23);
const person2 = new Person('Sam', 15);

console.log(person1.name , person1.age); 
console.log(person2.name , person2.age); 
```
- Output :
```ts
John , 23
Sam , 15
```

## Adding Properties And Methods in an Object
- You can add properties or methods in an object like this:
```ts
function Person () {
    this.name = 'John',
}

let person = new Person();
let person2 = new Person();

// adding property to person object
person.gender = 'male';

// adding method to person object
person.greet = function () {
    console.log('hello');
}

person.gender   // prints male
person.greet();   // prints hello
```
- In the above example, a new property `gender` and a new method `greet()` is added to the `person object` .
- However, this new property and method is only added to `person`. You cannot access gender or greet() from `person2`. 
- Hence the program gives `error` when we try to access `person2.greet()` .


## Adding Properties And Methods in an Constructor / Object Prototype
- You can also add properties and methods to a constructor function using a prototype. 
- For example,
```ts
function Person () {
    this.name = 'John',
}

let person1 = new Person();
let person2 = new Person();

// adding new property to constructor function
Person.prototype.gender = 'Male';

console.log(person1.gender); // prints Male
console.log(person2.gender); // prints Male
```
- To learn more about prototypes, visit [JavaScript Prototype]().


