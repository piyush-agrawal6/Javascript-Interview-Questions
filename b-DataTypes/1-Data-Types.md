## JavaScript Data Types

Datatypes are basically types of data that can be used and manipulated in a program. A variable in JavaScript can contain any data. This means that a variable at one time can be a number and at another be a string.

The latest ECMAScript standard defines eight data types Out of which seven data types are `Primitive` and complex or `Non-Primitive`.

### Primitive Data Types : 

The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.

-  `Number` : JavaScript numbers are always stored in double-precision 64-bit binary format IEEE 754. Unlike other programming languages, you don’t need int, float, etc to declare different numeric values.
- `String` : JavaScript Strings are similar to sentences. They are made up of a list of characters, which is essentially just an “array of characters, like “Hello Everyone” etc.
- `Boolean` : Represent a logical entity and can have two values: true or false.
- `Null` : This type has only one value that is null.
- `Undefined` : A variable that has not been assigned a value is undefined.
- `Symbol` : Symbols return unique identifiers that can be used to add unique property keys to an object that won’t collide with keys of any other code that might add to the object.
- `BigInt` : BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 253-1.

### Non-Primitive Data Types : 

The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.

- `Object`: It is the most important data type and forms the building blocks for modern JavaScript. We will learn about these data types in detail in further articles. `Arrays` and `Functions` in JavaScript belong to the ‘object’ data type.


## Primitive Data Types

### 1. Number
- A number data type can be an integer, a floating point value, an exponential value, a ‘NaN’ or a ‘Infinity’.
```
let num = 2;   // integer 
let num2 = 1.3;   // floating point number
let num3 = Infinity;   // Infinity
let c = 10e4;   //  an exponential value which evaluates to 10*10000
```

- If a number is divided by 0, the resulting value is `infinity`.
```
5/0;    // results in infinity
The type of infinity is a number
typeof(infinity);   // returns number
 ```

- A `NaN` results when we try to perform an operation on a number with a non-numeric value
```
‘hi’ * 5; // returns NaN
typeof(NaN);  // returns a number
 ```
