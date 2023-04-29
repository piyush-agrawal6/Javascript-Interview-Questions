## Getters and Setters
- In JavaScript, `getter` methods `get` the value of an object and `setter` methods `set` the value of an object.
- JavaScript classes may include `getters` and `setters`. 
- You use the get keyword for getter methods and set for setter methods. 
- For example,
```ts
class Person {
    constructor(name) {
        this.name = name;
    }

    // getter
    get personName() {
        return this.name;
    }

    // setter
    set personName(x) {
        this.name = x;
    }
}

let person1 = new Person('Jack');

console.log(person1.name); // prints Jack

person1.personName = 'Sarah';

console.log(person1.name); // prints Sarah
```
