![Screenshot_14](https://user-images.githubusercontent.com/100460788/233957579-39ddaa3e-fa3c-42ae-9b4f-82879d844363.png)

## Hoisting

- In JavaScript, Hoisting is a kind of default behavior in which all the declarations either variable declaration or function declaration are moved at the top of the scope just before executing the program's code.
- Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.
- It allows us to call functions before even writing them in our code.
- Note: JavaScript only hoists declarations, not initializations.
- JavaScript allocates memory for all variables and functions defined in the program before execution.

## Sequence of variable declaration

The following is the sequence in which variable declaration and initialization occur.

```ts
Declaration –> Initialization/Assignment –> Usage
```

#### Variable lifecycle:

```ts
let a; // Declaration
a = 100; // Assignment
console.log(a); // Usage
```

- However, since JavaScript allows us to both declare and initialize our variables simultaneously, so we can declare and initialize at the same time.

```ts
let a = 100;
```

- Note: Always remember that in the background the Javascript is first declaring the variable and then initializing them. It is also good to know that variable declarations are processed before any code is executed.

## Variable Hoisting

In terms of variables and constants, keyword `var` is hoisted and `let` and `const` does not allow hoisting.

### 1. Variable hoisting with `var`

- When the interpreter hoists a variable declared with var, it initializes its value to undefined.

```ts
console.log(a);

var a = "bar";

console.log(a);
```

- The above program behaves as:

```ts
var a;

console.log(a);

a = bar;

console.log(a);
```

Output :

```ts
undefined;
bar;
```

- Remember that the first `console.log(a)` outputs `undefined` because a is hoisted and given a default value of `undefined`
- Using an `undeclared variable` will throw a `ReferenceError` instead because no declaration was hoisted:

```ts
console.log(a); // Uncaught ReferenceError: a is not defined
```

### 2. Variable hoisting with `let` and `const`

- Variables declared with `let` and `const` are hoisted but not initialized with a default value. Accessing a let or const variable before it's declared will result in a `ReferenceError`

```ts
console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization

let a = "bar";
```

- Notice that the interpreter still hoists a: the error message tells us the variable is initialized somewhere.

### The temporal dead zone

- The reason that we get a reference error when we try to access a let or const variable before its declaration is because of the `temporal dead zone (TDZ)`.
- A `temporal dead zone` (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.
- Accessing the variable in this TDZ throws a `ReferenceError`.

## Function hoisting in JavaScript

- Function declarations are hoisted, too. Function hoisting allows us to call a function before it is defined.
- For example, the following code runs successfully and outputs `hello`:

```ts
a(); // hello

function a() {
  console.log("hello");
}
```

- Note that only `function declarations` are hoisted, not `function expressions`. This should make sense: as we just learned, variable assignments aren't hoisted.
- If we try to call the variable that the function expression was assigned to, we will get a `TypeError` or `ReferenceError`, depending on the variable's scope:

```ts
a(); // Uncaught TypeError: a is not a function
var a = function () {};

b(); // Uncaught ReferenceError: Cannot access 'b' before initialization
let b = function () {};

c(); // Uncaught ReferenceError: Cannot access 'c' before initialization
const c = function () {};
```

- This differs from calling a function that is never declared, which throws a different `ReferenceError`:

```ts
a(); // Uncaught ReferenceError: a is not defined
```
