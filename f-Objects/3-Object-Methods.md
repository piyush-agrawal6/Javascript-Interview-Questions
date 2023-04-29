## JavaScript Methods

- JavaScript methods are `actions` that can be `performed` on `objects` .
- A JavaScript method is a property containing a function definition.
- For example,
```ts 
const person = {
    name: 'John',
    greet: function(){console.log('hello')}
}
```
- In the above example, a person object has two keys (name and greet), which have a string value and a function value, respectively.
- Hence basically, the JavaScript method is an object property that has a function value.

## Accessing Object Methods

- You access an object method with the following syntax:
```ts
objectName.methodName()
```
- The methodName property will execute (as a function) when it is invoked with ().
- This example accesses the fullName() method of a person object.
```ts
let person = {
    fullName : "Joy"
}

let name = person.fullName(); 

console.log(name)//  prints Joy
```
- If you access the fullName property, without (), it will return the function definition

## Adding a Method 
- You can also add a method in an object.
- For example,

```ts
let student = { };

// adding a property
student.name = 'John';

// adding a method
student.greet = function() {
    console.log('hello');
}

// accessing a method
student.greet(); // prints hello
```
- In the above example, an empty student object is created. Then, the name property is added.
- Similarly, the greet method is also added. In this way, you can add a method as well as property to an object.

## Built-In Methods
- In JavaScript, there are many built-in methods. For example,
```ts
let number = '23.32';
let result = parseInt(number);
console.log(result); // prints 23

let message = "Hello world!";
let capital = message.toUpperCase();
console.log(capital)  // prints HELLO WORLD!
```
- Here, the `parseInt()` method of Number object is used to convert numeric string value to an integer value.
- Te `oUpperCase()` method converts a text to uppercase.

## Some inportant built-in object methods
- `Object.values()` – return own enumerable property’s values of an object as an array.
- `Object.keys()` - returns array of object's enumerable property name
- `Object.entries()` – return own enumerable string-keyed property [key, value] pairs of an object.
- `Object.assign()` – copy an object or merge objects.
- `Object.is()` – check if two values are the same value.

## JavaScript `this` Keyword

JavaScript this Keyword
- To access a property of an object from within a method of the same object, you need to use the this keyword. 
- Let's consider an example.
```ts
const person = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function() { console.log('The name is' + ' ' + this.name); }
};

person.greet();
```
- Output :
```ts
The name is John
```

- In JavaScript, the this keyword refers to an object.
- Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:
- In an object method, this refers to the object.
- Alone, this refers to the global object.
- In a function, this refers to the global object.
- In a function, in strict mode, this is undefined.
- In an event, this refers to the element that received the event.
- Methods like call(), apply(), and bind() can refer this to any object.
