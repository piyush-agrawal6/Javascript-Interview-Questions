## JavaScript Prototype Chain
- Javascript has an interesting inheritance model, which works completely different from most OOP languages. 
- While it is object-oriented, an object doesn’t have a type or a class to access its methods,but it has a `prototype`. 
- So every object has a prototype, including the prototype object i.e, the prototype object has a prototype of its own.
- This “chain” goes all the way back until it reaches an object that has no prototype.
- When an attribute is called on an object, the constructor is first checked for that attribute.
- if it doesn’t exist, then its prototype chain is traversed until the attribute is found or the end is reached.
- And this is what we call as `prototype chaining` in javascript.

If an object tries to access the same property that is in the constructor function and the prototype object, the object takes the property from the constructor function. 
- For example,

```ts
function Person() {
    this.name = 'John'
}

Person.prototype.name = 'Peter';
Person.prototype.age = 23

const person = new Person();

console.log(person.name); // John
console.log(person.age); // 23
```

- In the above program, a property `name` is declared in the constructor function and also in the prototype property of the constructor function. 
- When the program executes, `person.name` looks in the constructor function, since the constructor function has the name property with value 'John', the object takes value from that property.
- When the program executes, `person.age` looks in the constructor function to see if there is a property named age. 
- Since the constructor function doesn't have age property, the program looks into the prototype object of the constructor function and the object inherits property from the prototype object (if available).
