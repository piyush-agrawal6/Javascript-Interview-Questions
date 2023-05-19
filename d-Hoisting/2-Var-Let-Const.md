![Screenshot_15](https://user-images.githubusercontent.com/100460788/233977674-fe93dfa3-c823-45cf-9a72-cb5610a82909.png)

## Var VS Let Vs Const

- One of the features that came with `ES6` is the addition of `let` and `const`, which can be used for variable declaration. The question is, what makes them different from good ol' `var` which we've been using? If you are still not clear about this, then this article is for you.

- Variable declaration in JavaScript is the process of creating a variable and giving it a name so that it can be used to store a value. A variable is a named container that holds a value, and can be used to store and manipulate data in a program. `var`, `let`, and `const` are all used in JavaScript to declare variables. However, there are many differences between let, var, and const in javascript in terms of how they behave and how they should be used.

## var

- `var` is the oldest way to declare a variable in JavaScript.
- Variables declared with `var` have a `function-level scope`, meaning they are only accessible within the function in which they were declared. -
- They also have `hoisting` behavior, which means they are accessible throughout the entire scope of the function, regardless of where they were declared.
- `Reassigning` value is `allowed` while using var variable.
- The `redeclaration` of var variable is `allowed.
- However, because of its function-level scope, variables declared with var can lead to unexpected behavior and are generally not recommended.

```ts
var x = 5;
console.log(x); // Output: 5

if (x > 0) {
  var x = 10;
  console.log(x); // Output: 10
}
console.log(x); // Output: 10
```

## let

- `let` was introduced in `ES6` as an alternative to `var`.
- Variables declared with `let` have the `block-level scope`, meaning they are only accessible within the block in which they were declared.
- `Hoisting` is `not allowed` while using let variable.
- They also have the concept of the `temporal dead zone`, which means they are not accessible before they are declared.
- `Reassigning` value is `allowed` while using let variable.
- The `redeclaration` of let variable is `not allowed.

```ts
let y = 5;
console.log(y); // Output: 5

if (y > 0) {
  let y = 10;
  console.log(y); // Output: 10
}
console.log(y); // Output: 5
```

## const

- `const` was also introduced in `ES6`
- It is used to declare variables that `cannot be reassigned`.
- `Hoisting` is `not allowed` while using let variable.
- `Reassigning` value is `not allowed` while using let variable.
- The `redeclaration` of const variable is `not allowed.
- This makes `const` variables useful for declaring constants, such as `pi` or the `gravitational constant`, which have a `fixed value`.
- Like let, `const` variables have the `block-level scope`, and, they are not accessible before they are declared.
- They also have the concept of the `temporal dead zone`, which means they are not accessible before they are declared.
- const is the most recommended for defining constant values that you don't expect to change.

```ts
const pi = 3.14;
console.log(pi); // Output: 3.14

pi = 3.14159; // TypeError: Assignment to constant variable.
```

## Comparison Table between `var`, `let` and `const`

- Here is a comparison table between var, let and const in JavaScript:

| Feature              | var            | let         | const       |
| -------------------- | -------------- | ----------- | ----------- |
| `Scope`              | Function-level | Block-level | Block-level |
| `Reassignable`       | Yes            | Yes         | No          |
| `Redeclaration`      | Yes            | No          | No          |
| `Hoisting`           | Yes            | No          | No          |
| `Temporal Dead Zone` | No             | Yes         | Yes         |


### Next Topic - [Interview questions](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/blob/master/d-Hoisting/3-Questions.md)
