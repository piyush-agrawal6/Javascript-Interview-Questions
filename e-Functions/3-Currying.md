## What is Currying in JavaScript?

- `Currying` is defined as changing a function having `multiple arguments` into a sequence of functions with a `single argument`. 
- It is a process of converting a function with `more arity` into a function having `less arity`. 
- The term `arity` means the number of `parameters` in a function. 
- It is a transformation of functions that translate a function from callable as add(1, 2, 3) into callable as add(1)(2)(3). 
- It only transforms a function instead of calling it. It returns a new function until all arguments get exhausted.

## Why is currying useful in JavaScript?

- It helps us to create a higher-order function
- Currying is helpful in Event handling.
- It is very useful in building modular and reusable code
- It helps us to avoid passing the same variable multiple times
- It makes the code more readable

## Example
- A Simple, Three-Parameter Function
- In this example we will see a simple function that will accept three parameters:
```ts
const add =(x, y, z)=>{
    return x+y+z
}
console.log(add(2, 3, 5))  // prints 10
```

- `Explanation` : In the above example, we have given three parameters of which addition is performed and the result is printed as the output.
- We will now use see the implementation of the currying function where one argument will be accepted by the function and it will return a series of function.
```ts
function add(x) {  
    return (y) => {
        return (z) => { 
            return x + y + z
        }
    }
}
console.log(add(2)(3)(5))  // prints 10
```
- Now, the calculation will be performed with the previous parameters x, y, and z as 5, 2, and 3 respectively and it will return 10.


## Infinite Currying
- Currying with `infinite` or `N` no.of arguments .
- So let us now take a scenario where we have a function sum where we can pass arguments like this sum(1)(2) and it can go onto any number. 
- The sum function should generally give me a sum of all the numbers. In this case, it should probably give me the output as 3.

```ts
let sum = function(a)=>{
    return function(b)=>{
      return a+b
    }
}
console.log(sum(1)(2))  // prints 3
```
- This is generally a smaller problem but suppose we have something like sum(1)(2)(3) then we have to return another function which should take c as an argument. 
- In this, we can see a clear pattern and we want to solve this question recursively.
- Example :
```ts
let sum = function(a)=>{
    return function(b)=>{
      if(b){
       return sum(a+b)
      }
     return a
    }
}
console.log(sum(1)(2)(3)(4)())   // prints 10
```

- In the above code, we are taking a sum function which takes an argument a. Now, this sum function will return another function which will take an argument b. 
- And now we are checking whether b exists or not. 
- If the value of b exists then we are returning the sum function again and passing the argument as the sum of a+b. 
- Otherwise, we are just returning the value of an as we are considering a case where the value of b will be an empty argument.
- When we  console.log(sum(1)(2)(3)(4)()) then the output to the console will be 10 as we have made the function sum function very smart above which helps us to achieve the sum of the pattern given below.
- This is what we call as infinite currying.
