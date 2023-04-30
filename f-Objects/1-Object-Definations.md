![Screenshot_3](https://user-images.githubusercontent.com/100460788/235360815-dc40f58d-1397-4ee0-bb19-324db222dd03.png)

## Objects

- JavaScript `object` is a non-primitive data-type that allows you to store multiple collections of data in `key-value pairs`. 
- Each `key-value pair` is called a `property` .

![Screenshot_2](https://user-images.githubusercontent.com/100460788/235174754-39d91da9-10a5-4d80-8b7a-ec2c797c0370.png)

- The key of a property can be a string. And the value of a property can be any value, e.g., a string, a number, an array, and even a function.
- Example :
```ts
const student = {
    firstName: 'ram',
    class: 10
};
```

## JavaScript Nested Objects
- An object can also contain another object. 
- For example,
- 
```ts
const student = { 
    name: 'John', 
    marks: {
        science: 70,
        math: 75
    }
}
```

## Accessing Object Properties
You can access the value of a property by using its key.

### 1. Using dot Notation
- Here's the syntax of the dot notation.
```ts
objectName.key
```
For example,
```ts
const person = { 
    name: 'John', 
    age: 20, 
};

console.log(person.name); // Prints John
```

### 2. Using bracket Notation
- Here is the syntax of the bracket notation.
```ts
objectName["propertyName"]
```
For example,
```ts
const person = { 
    name: 'John', 
    age: 20, 
};

console.log(person["name"]); // Prints John
```

## Creating a JavaScript Object
There are different ways to create new objects:
- Create a single object, using an object literal.
- Create a single object, with the keyword new.
- Define an object constructor, and then create objects of the constructed type.
- Create an object using Object.create().
