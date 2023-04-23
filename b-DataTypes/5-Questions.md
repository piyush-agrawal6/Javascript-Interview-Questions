### 1. What are the various data types that exist in JavaScript?

These are the different types of data that JavaScript supports:

- `Boolean` - For true and false values
- `Null` - For empty or unknown values
- `Undefined` - For variables that are only declared and not defined or initialized
- `Number` - For integer and floating-point numbers
- `String` - For characters and alphanumeric values
- `Object` - For collections or complex values
- `Symbols` - For unique identifiers for objects

### 2. What is the difference between Undefined and Undeclared in JavaScript?

- `Undefined` : Undefined means a variable has been declared but a value has not yet been assigned to that variable.
- `Undeclared` : Variables that are not declared or that do not exist in a program or application.

### 3. What is the difference between Undefined and Null in JavaScript?

- `Undefined` : Undefined means a variable has been declared but a value has not yet been assigned to that variable.
- `Null` : Null is an assignment value that we can assign to any variable that is meant to contain no value.

### 4. Difference between “ == “ and “ === “ operators (with examples)

- `==` operator is a loose comparison operator that used to compare the values
- `===` operator is a strict comparison operator that is used to compare the values as well as types.

Example:

```
var x = 3;
var y = "3";

console.log(x == y)  // it returns true as the value of both x and y is the same
console.log(x === y) // it returns false as the typeof x is "number" and typeof y is "string"
```

### 5. What is NaN property in JavaScript?

- `NaN` property represents the `Not-a-Number` value. It indicates a value that is not a legal number.
- `typeof` of NaN will return a `Number`.
- To check if a value is NaN, we use the `isNaN()` function.

### 6. What would be the result of 2+5+”3″?

Since 2 and 5 are integers, they will be added numerically. And since 3 is a string, its concatenation will be done. So the result would be 73. The ” ” makes all the difference here and represents 3 as a string and not a number.

### 7. What is the output of "10"+20+30 in JavaScript?

102030 because after a string all the + will be treated as string concatenation operator (not binary +).

### 8. How to handle exceptions in JavaScript?

By the help of try/catch block, we can handle exceptions in JavaScript. JavaScript supports try, catch, finally and throw keywords for exception handling.

### 9. What are the falsy values in JavaScript, and how can we check if a value is falsy?

Those values which become false while converting to Boolean are called falsy values.

```
const falsyValues = ['', 0, null, undefined, NaN, false];
```

We can check if a value is falsy by using the Boolean function or the Double NOT operator (!!).

### 10. Guess the outputs of the following code:

```
function runFunc(){
  console.log("1" + 1);
  console.log("A" - 1);
  console.log(2 + "-2" + "2");
  console.log("Hello" - "World" + 78);
  console.log("Hello"+ "78");
}
runFunc();
```

Output:

```
11
Nan
2-22
NaN
Hello78
```

### 11. Guess the outputs of the following code:

```
let a = 0;
let b = false;
console.log((a == b));
console.log((a === b));
```

Output:

```
true
false
```


### Next Topic - [Scope](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/tree/master/c-Scope)
