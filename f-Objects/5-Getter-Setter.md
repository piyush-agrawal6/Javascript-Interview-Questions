## JavaScript Getter and Setter
In JavaScript, there are two kinds of object properties:
- Data properties
- Accessor properties

## Data Property
- Here's an example of data property:
```ts
const student = {
    // data property
    firstName: 'Monica';
};
```
## Accessor Property
In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:
- `get` - to define a `getter method` to get the property value
- `set` - to define a `setter method` to set the property value

## JavaScript Getter
- In JavaScript, getter methods are used to access the properties of an object. For example,
```ts
const student = {

    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error
```
- In the above program, a getter method getName() is created to access the property of an object.

## JavaScript Setter
- In JavaScript, setter methods are used to change the values of an object. For example,
```ts
const student = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); // Monica

// change(set) object property using a setter
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah
```
- In the above example, the setter method is used to change the value of an object.


## JavaScript Object.defineProperty()
- In JavaScript, you can also use `Object.defineProperty()` method to add `getters` and `setters`. For example,
```ts
const student = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});

console.log(student.firstName); // Monica

// changing the property value
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah
```
In the above example, Object.defineProperty() is used to access and change the property of an object.
The syntax for using Object.defineProperty() is:
```ts
Object.defineProperty(obj, prop, descriptor)
```
The Object.defineProperty() method takes three arguments.
- The first argument is the objectName.
- The second argument is the name of the property.
- The third argument is an object that describes the property.
