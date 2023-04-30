![Screenshot_6](https://user-images.githubusercontent.com/100460788/235361061-68e1aa1d-7b17-433f-b39d-3bb3e5bde6d1.png)

## What is OOP (Object-oriented Programming)?
- OOP is a programming paradigm that believes in grouping data (properties) and methods (actions) together inside a box. 
- It demonstrates the pattern of real-world objects.

There are two types of OOP languages:
- Class-Based languages like JAVA, C++.
- Prototype-Based languages like JavaScript.

## Features of an Object-Oriented Language
- There are four rules or main pillars of Object-oriented programming language. 
- This defines how the data and actions associated with the data are organized using code.

![Screenshot_3](https://user-images.githubusercontent.com/100460788/235344549-0732fa26-b173-41b4-a8c9-1261939cb8bb.png)

Let us discuss all four of them in detail below.

## 1. Object
### What is an object?
- We have already discussed a lot about Objects before.
- Please follow the link to read - [Objects](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/tree/master/f-Objects)

## 2. Classes
### What are Classes?
- We have already discussed a lot about Classes in the previous module.
- Please follow the link to read - [Classes](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/tree/master/g-Classes)

## 3. Encapsulation
- `Encapsulation` is defined as binding the data and methods into a single unit to protect it from outside access.
- Encapsulation ensures that data can only be accessed using the data functions defined inside the class.
- Encapsulation is implemented through public and `private properties` and methods.
- In JavaScript, all objects properties and methods are `public` by default.
- Read more about Private properties here - [Private-Classes](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/blob/master/g-Classes/5-Private-Methods.md)

Advantages of Encapsulation in JavaScript
- Encapsulation guards an object against illegal access.
- Encapsulation helps to achieve a level without revealing its complex details.
- This will reduce human errors.
- Make the application more flexible and manageable.
- Simplifies the application.

## 4. Abstraction
- Abstraction is a principle that says that a class should only represent information that is relevant to the problem's context. 
- In plain English, only expose to the outside the properties and methods that you're going to use. If it's not needed, don't expose it.
- People often misunderstood encapsulation with abstraction. 
- Abstraction is one step ahead of encapsulation. Abstraction is defined as showing only the essential things and hiding the inner implementation.
- Let's take an example of a car. On a Car, we can perform some actions like start, break and stop. Whenever you call one of these actions, it gives you some result.
- These actions have certain sub-actions which are hidden from you, but you don't need to care about those sub-actions.
- This is how car company uses an abstraction of functionality to give their customer a smooth experience.

## 5. Inheritance
- Inheritance is the ability to create classes based on other classes. 
- With inheritance, we can define a parent class (with certain properties and methods), and then children classes that will inherit from the parent class all the properties and methods that it has.
- The class that inherits the property is known as subclass or child class and the class whose properties are inherited is known as a superclass or parent class.
- Read more about inheritance here - [Inheritance](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/blob/master/g-Classes/3-Inheritance.md)

## 6. What is Polymorphism?
- Polymorphism is a concept used in the object-oriented paradigm that enables us to use the same function in different forms. 
- This reduces repetition and makes the code snippet useful in many different cases.
- Polymorphism is implemented in JavaScript by `generic`, `overloading`, and `structural sub-typing`.

Polymorphism has two types.
- Compile time Polymorphism
- Runtime Polymorphism

`Function overloading` is a type of compile-time polymorphism. Here, we are creating more than one function with the same name and different parameters or types.

`Method overriding` is a type of runtime polymorphism. Remember I told you that you can override the methods of parent class in the child class? That is method overriding.
