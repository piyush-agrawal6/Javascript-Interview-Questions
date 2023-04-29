## Class Inheritance
- `Inheritance` enables you to define a class that takes all the functionality from a parent class and allows you to add more.
- Using class inheritance, a class can inherit all the methods and properties of another class.
- Inheritance is a useful feature that allows `code reusability`.
- To use class inheritance, you use the `extends` keyword. 
- The following example defines the Animal and Bird classes and establishes the `inheritance` through the `extends` and `super` keywords.

```ts 
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}

let bird = new Bird(2);

bird.walk();  // prints "walking on 2 legs"
bird.fly();  // prints "flying"
```
## How it works.
#### First, 
- It use the `extends` keyword to make the `Bird` class inheriting from the `Animal` class:
- The `Animal class` is called a base class or `parent class` while the `Bird class` is known as a derived class or `child class`. 
- By doing this, the Bird class inherits all methods and properties of the Animal class.

#### Second
- In the `Bird‘s` constructor, call `super()` to invoke the `Animal‘s` constructor with the `legs` argument.
- JavaScript requires the child class to call `super()` if it has a `constructor`.
- Here, `super` inside `Bird` class refers to the `Animal class. 
- Hence, when the constructor of `Bird` class is called, it also calls the constructor of the `Animal` class which assigns a `legs` property to it.

## Uses of Inheritance
- Since a child class can inherit all the functionalities of the parent's class, this allows code reusability.
- Once a functionality is developed, you can simply inherit it. No need to reinvent the wheel. This allows for cleaner code and easier to maintain.
- Since you can also add your own functionalities in the child class, you can inherit only the useful functionalities and define other required features.
