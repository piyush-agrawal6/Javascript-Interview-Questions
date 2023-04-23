![Screenshot_13](https://user-images.githubusercontent.com/100460788/233829621-a9ce6fc1-0f39-483f-949f-9dcb85597bc2.png)

## Type conversion in JS

`Type conversion` is the process of converting a value from one type to another.
Values in JavaScript can be of different types. You could have a number, string, object, boolean – you name it. Sometimes, you may want to convert data from one type to another to fit a certain operation.

There are two types of Type Coercion in JavaScript:

- `Implicit` (automatically done during code execution)
- `Explicit` (done by you the developer)

Implicit Type Conversion is also known as `Type Coercion` while Explicit Type Conversion is also known as `Type Casting`.

## What is Implicit Type Conversion (Coercion)?

There are some operations that you might try to execute in JavaScript which are literally not possible. For example, look at the following code:

```
const sum = 35 + "hello"
```

Here, you're trying to add a number and a string. This is, practically speaking, not possible. You can only add numbers `(sum)` together or add strings `(concatenate)` together.

Well, JavaScript is a `weakly typed language`. Instead of JavaScript throwing an `error`, it coerces the type of one value to fit the type of the other value so that the operation can be carried out.

```
const sum = 35 + "hello"

console.log(sum)  // 35hello

console.log(typeof sum) // string
```

This is an example of `coercion` where the type of one value is coerced to fit the other so that the operation can continue.

### 1. Number to String Conversion:

When any string or non-string value is added to a string, it always converts the non-string value to a string implicitly.

Example:

```
var x = 10 + '20';
var y = '20' + 10;
var z = true + '10';

console.log(x);
console.log(y);
console.log(z);
```

Output:

```
1020
2010
true10
```

## 2. String to Number Conversion:

When an operation like subtraction (-), multiplication (\*), division (/) or modulus (%) is performed, all the values that are not number are converted into the number data type, as these operations can be performed between numbers only. Some examples of this are shown below.

Example:

```
var w = 10 - '5';
var x = 10 * '5';
var y = 10 / '5';
var z = 10 % '5';

console.log(w);
console.log(x);
console.log(y);
console.log(z);
```

Output:

```
5
50
2
0
```

### 3. Boolean to Number:

When a Boolean is added to a Number, the Boolean value is converted to a number as it is safer and easier to convert Boolean values to Number values. A Boolean value can be represented as 0 for ‘false’ or 1 for ‘true’. Some examples of this are shown below.

Example:

```
var x = true + 2;
var y = false + 2;

console.log(x);
console.log(y);
```

Output:

```
3
2
```

### 4. The Equality Operator:

The `Loose Equality Operator (==)` can be used to compare values irrespective of their `type`. This is done by coercing a non-number data type to a number. Some examples of this are shown below:

Example:

```
var x = (10 == '10');
var y = (true == 1);
var z = (true == 'true');

console.log(x);
console.log(y);
console.log(z);
```

Output:

```
true
true
false
```

The `Strict Equality Operator (===)` does a strict check – that is, it strictly checks the `values` compared, as well as the `types`. Type coercion does not occur here, so there are no unexpected answers.

Example:

```
var x = (10 === '10');
var y = (false === "");

console.log(x);
console.log(y);
```

Output:

```
false
false
```

## What is Explicit Type Conversion (Type Casting)?

To explicitly convert types, you use the type Constructors.

### For example, to convert a number to a string:

```
const number = 30

const numberConvert = String(number)

console.log(numberConvert) // "30"

console.log(typeof numberConvert) // string
```

### Another example is to convert a number to a boolean:

```
const number = 30

const numberConvert = Boolean(number)

console.log(numberConvert) // true

console.log(typeof numberConvert) // boolean
```

### And one more example, to convert a boolean to a string:

```
const boolean = false

const booleanConvert = String(boolean)

console.log(booleanConvert) // "false"

console.log(typeof booleanConvert) // string
```

In these examples, we explicitly convert a value from one type to another.


### Next topic - [Types of errors in js](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/blob/master/b-DataTypes/4-Error-Types.md)
