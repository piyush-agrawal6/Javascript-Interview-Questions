## JavaScript Properties
- Properties are the values associated with a JavaScript object.
- A JavaScript object is a collection of unordered properties.
- Properties can usually be `changed`, `added`, and `deleted`, but some are read only.

## Adding a new property to an object
- Unlike objects in other programming languages such as Java and C#, you can add a property to an object after object creation.
- The following statement adds the age property to the person object and assigns 25 to it:
```ts
person.age = 25;
```

## Deleting a property of an object
- To delete a property of an object, you use the `delete` operator:
```ts
delete objectName.propertyName;
```
- The following example removes the age property from the person object:
```ts
delete person.age;
```
- The delete keyword deletes both the `value` of the property and the `property` itself.
- After deletion, the property cannot be used before it is added back again.
- The delete operator is designed to be used on object properties. It has no effect on variables or functions.
- The delete operator should not be used on predefined JavaScript object properties. It can crash your application.

## Modifying the value of a property
- To change the value of a property, you use the assignment `operator (=)` .
- For example:
```ts
let person = {
    firstName: 'John',
    lastName: 'Doe'
};
person.firstName = 'Jane';
console.log(person);
```
- Output:
```ts
{ firstName: 'Jane', lastName: 'Doe' }
```
- In this example, we changed the value of the firstName property of the person object from 'John' to 'Jane'.

## Checking if a property exists
- To check if a property exists in an object, you use the `in operator`.
- The in operator returns true if the propertyName exists in the objectName.
- The following example creates an employee object and uses the in operator to check if the `age` and `company` properties exist in the object:
```ts
let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    age: 18
};
console.log('age' in employee);  // prints true
console.log('companu' in employee); // prints false
```
