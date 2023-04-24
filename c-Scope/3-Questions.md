### 1. What are the scopes of a variable in JavaScript?
The scope of a variable implies where the variable has been declared or defined in a JavaScript program. There are two scopes of a variable:
- `Global variables` are available everywhere in a JavaScript code.
- `Local variables` are accessible only within a function in which they are defined.

### 2. What is scope chain ?
- `Scope Chain` : JavaScript engine also uses Scope to find variables. Let’s understand that using an example:
```ts
var y = 24;

function fun1(){
  var x = 667;
  
  var fun2 = function(){
    console.log(x); // Does not find x inside `fun2` , so looks for variable inside `fun1` , returns 667
  }

  var fun3 = function(){
    console.log(y); // Does not find y inside `fun3`, so looks for variable inside `fun1` and does not find it, so looks for variable in global scope, finds it and returns 24
  }

  fun2();
  fun3();
}
fun1();
```
- As you can see in the code above, if the javascript engine does not find the variable in local scope, it tries to check for the variable in the outer scope. If the variable does not exist in the outer scope, it tries to find the variable in the global scope.
- If the variable is not found in the global space as well, a reference error is thrown.
