## Closure 

- A `closure` can be defined as a JavaScript feature in which the inner function has access to the outer function variable. 
- In JavaScript, every time a closure is created with the creation of a function.

The closure has three scope chains listed as follows:
- Access to its own scope.
- Access to the variables of the outer function.
- Access to the global variables.

Example :
```ts
function outer() {
  var a = 1;
  
  function inner() { 
    var b = 2
    console.log(a+b);
  }
  
  return inner;
}

var sum = outer();
sum();  // prints 3
```
- In the example above, the function `outer` creates a local variable `a` and `inner` (a function which printsthe sum of two numbers to the console).

- The function `inner` doesn’t have any variables `a` of its own — however, it does have access to the variables within the outer function, `outer`, because of a closure.

- Therefore, it can use the variable `a` declared in `outer` and add it to the variable `b` to successfully log it to the console.

## Scope Chain
- Based on the above definition, we know that an environment has access to its parent’s environment, and its parent environment has access to its parent environment, and so on. This set of identifiers that each environment has access to is called `scope` . We can nest scopes into a hierarchical chain of environments known as the `scope chain` .
