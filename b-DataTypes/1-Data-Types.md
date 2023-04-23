## JavaScript Data Types

Data types are basically types of data that can be used and manipulated in a program. A variable in JavaScript can contain any data. This means that a variable at one time can be a number and at another be a string.

The latest ECMAScript standard defines eight data types Out of which seven data types are `Primitive` and complex or `Non-Primitive`.

### Primitive Data Types :

The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.

- `Number` : JavaScript numbers are always stored in double-precision 64-bit binary format IEEE 754. Unlike other programming languages, you don’t need int, float, etc to declare different numeric values.
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
let num = 2;    // integer
let num2 = 1.3;    // floating point number
let num3 = Infinity;    // Infinity
let c = 10e4;    //  an exponential value which evaluates to 10*10000
```

- If a number is divided by 0, the resulting value is `infinity`.

```
5/0;    // results in infinity
The type of infinity is a number
typeof(infinity);     // returns number
```

- A `NaN` results when we try to perform an operation on a number with a non-numeric value

```
‘hi’ * 5;    // returns NaN
typeof(NaN);    // returns a number
```

### 2. String

The string data type in JavaScript can be any group of characters enclosed by a single or double-quotes or by backticks.

```
let str = "Good morning !";
let str2 = 'Single quotes works fine';
let str3 = `Hey ${str}`;   // output will be "Hey Good morning !"
```

There’s no difference between ‘single’ and “double” quotes in javascript. Backticks provide extra functionality as with their help of them we can embed variables inside them.

### 3. Boolean

The boolean data type has only two values, `true` and `false`. It is mostly used to check a logical condition. Thus Booleans are logical data types which can be used for comparison of two variables or to check a condition. The true and false implies a ‘yes’ for ‘true’ and a ‘no’ .

Let’s see an example of comparison statement:

```
var a=5;
var b=6;
console.log(a==b)   // returns false
console.log(a!=b)   // returns true
```

When we check the data type of ‘true’ or ‘false’ using typeof operator, it returns a boolean.

```
typeof(true)   // returns boolean
typeof(false)   // returns boolean
```

### 4. Undefined

`Undefined` data type means a variable that is not defined. The variable is declared but doesn’t contain any value.

```
var a;
console.log(a);   // This will return undefined.
```

### 5. Null

The null in JavaScript is a data type that is represented by only one value, the ‘null’ itself. A null value means no value.

Something like this:

```
var a = null;
console.log(a);   // This returns null
```

If we check the data type of a using the typeof operator, we get:

```
typeof(a);     // This returns object
```

This means the type of a null value is an object, not null. This is a known issue in JavaScript since its first release.

### 6. BigInt

BigInt: BigInt is a built-in object in JavaScript that provides a way to represent whole numbers larger than 253-1. The largest number that JavaScript can reliably represent with the Number primitive is 253-1, which is represented by the MAX_SAFE_INTEGER constant.

```
var bigBin = BigInt("0b1010101001010101001111111111111111");
// 11430854655n
console.log(bigBin);
```

### 7. Symbol:

Symbols are new primitive built-in object types introduced as part of ES6. Symbols return unique identifiers that can be used to add unique property keys to an object that won’t collide with keys of any other code that might add to the object. They are used as object properties that cannot be recreated. It basically helps us to enable encapsulation or information hiding.

```
let symbol1 = Symbol("Geeks")
let symbol2 = Symbol("Geeks")

// Each time Symbol() method is used to create new global Symbol
console.log(symbol1 == symbol2); // False
```

## Non-Primitive Data Types

### 1. Object

An object in JavaScript contains key-value pairs in its address.

We can create objects in multiple ways. One is by making use of figure brackets {…} with an optional list of properties. The properties of an object are in the form of ‘key: value’ pair. Another way is to make use of the ‘new’ keyword. An empty Object can be created using the given below syntax.

```
let obj = new Object(); // "object constructor" syntax
let obj = {};  // "object literal" syntax
```

When we check the value of obj using the typeof operator, it returns an object.

```
typeof (obj) // will return the data type ‘object’.
```

### 2. Array

An array in JavaScript is an object data type. An array contains more than one value with a numerical index, where the index starts from 0. Thus it holds its value in a key-value pair.

```
var arr1= [1, 2, 3];
```

```
arr1[0] =4;
console.log(arr1) // This will return the array [4, 2, 3]
typeof (arr1) // will return the data type ‘object’.
```

The array ‘arr1’ refers to the address in memory which contains the value [4, 2, 3].

### 3. Function

JavaScript doesn’t have a function data type but when we find the data type of a function using the typeof operator, we find that it returns a function. This is because a function is an object in JavaScript. Ideally the data type of a function should return an object but instead, it returns a function. This is an error in JavaScript.

Let’s define a function named a:

```
function a(){ }
```

Now let’s find the data type of a by using the typeof operator:

```
typeof(a); // This will return data type function
```

### Next Topic - [Operators in js](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/blob/master/b-DataTypes/2-Operators.md)
