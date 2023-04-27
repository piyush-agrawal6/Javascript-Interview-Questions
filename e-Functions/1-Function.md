## Functions

A function is a set of statements that take inputs, do some specific computation, and produce output. 

There are mainly two advantages of JavaScript functions.

- `Code reusability` : We can call a function several times so it save coding.
- `Less coding` : It makes our program compact. We don’t need to write many lines of code each time to perform a common task.

## Function declaration
A `function definition` (also called a function declaration, or function statement) consists of the function keyword, followed by:

- The name of the function.
- A list of `parameters` to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets, { }.
- For example, the following code defines a simple function named `addNumbers` :
```ts
function addNumbers(a,b) {
  return a+b;
}
```
- The function above, named `addNumbers`, takes in two parameters, `a` and `b` . The code inside the function body simply adds these two parameters together and returns the result.

## Function Expression
- `Function expressions` in JavaScript are similar to regular function declarations. The difference between them is that the function expression is always assigned to a `variable` .
- Such a function can be `anonymous` ; it does not have to have a `name`. 
- For example, the function `addNumbers` could have been defined as:

```ts
const addNumbers = function (a,b) {
  return a + b;
};

console.log(1,2)  // prints 3

```

## Arrow Function
- It is one of the most used and efficient methods to create a function in JavaScript because of its comparatively easy implementation. 
- It is a simplified as well as a more compact version of a regular or normal function expression or syntax.

Syntax:
```ts
let addNumbers = (a,b) => a+b
```
## Immediately Invoked Function Expressions (IIFE)
- JavaScript provides a variety of methods to define and execute Functions, there are named functions and anonymous functions, and then there are Functions that are executed as soon as they are mounted, these functions are known as Immediately Invoked Function Expressions or IIFEs.
- `Syntax` : IIFEs follow a particular syntax as shown below.
```ts
(function (){ 
// Function Logic Here. 
})();
```
- `Immediately Invoked` : This part is easy to explain and demonstrate. This type of function is called immediately invoked as these functions are executed as soon as they are mounted to the stack, it requires no explicit call to invoke the function. If we look at the syntax itself we have two pairs of closed parentheses, the first one contains the logic to be executed and the second one is generally what we include when we invoke a function, the second parenthesis is responsible to tell the compiler that the function expression has to be executed immediately.

## Parameter vs. argument
- A `parameter` is a variable in a function definition. It is a placeholder and hence does not have a concrete value.
- An `argument` is a value passed during function invocation.

![Screenshot_1](https://user-images.githubusercontent.com/100460788/234817199-dbe5412f-15e9-4f9f-9d59-d80fe5ab00b1.png)

## Spread vs Rest Operator
- JavaScript uses three dots `...` for both the `rest` and `spread` operators. 
- But these two operators are not the same.
- The main difference between rest and spread is that the rest operator puts the rest of some specific user-supplied values into a JavaScript array. 
- But the spread syntax expands iterables into individual elements.
- Example 1: In the example below two arrays are defined and they’re merged into one using the spread operator (…). 
```ts
// spread opetator
 var array1 = [10, 20, 30, 40, 50];
 var array2 = [60, 70, 80, 90, 100];
 var array3 = [...array1, ...array2];
 console.log(array3);
 
// rest operator
function function_name(...arguments) {
   statements;
}
```


## Default Parameters
- JavaScript functions also have a feature called `default parameters`. 
- They allow you to set default values for parameters in case they are not passed when the function is called.
- This is helpful in situations where you want to provide a default value for a parameter in case it is not passed. 
- Here is an example:

```ts
function greet(name = "John") {
    console.log(`Hello, ${name}!`);
}
greet();    // Hello, John!
greet("Joy");    // Hello, Joy!
```

- In this example, the greet function takes in a single parameter name, which is set to `John` by `default`. 
- If the function is called without passing any arguments, it will use the default value `John`. 
- But if an argument is passed, it will use that value instead.

## First-Class Function
- A programming language is said to have First-class functions if functions in that language are treated like other variables. 
- So the functions can be assigned to any other `variable` or passed as an `argument` or can be `returned` by another function.
- JavaScript treat function as a `first-class-citizens` . This means that functions are simply a value and are just another type of object.
- Example :
```ts
function square(number){
  return number * number
}

function dispalySquare(fn){
  console.log(fn(2))
}

displaySquare(square)  // prints 4
```

## Higher-Order Function
- A function that receives another function as an argument or that returns a new function or both is called `Higher-order function`. 
- Higher-order functions are only possible because of the `First-class function`.
- Example :
```ts
let greet =  function(name){
    return function(greeting){
        console.log(`Hi, ${name}, ${greeting}`);
    }
}
  
let func = greet('Joy')

func("How are you")
```
- Output :
```ts
Hi, Joy, How are you
```
## Function scope
- Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined.
- In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.

