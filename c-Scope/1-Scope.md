## What Is Scope?

In JavaScript your code runs within some set scope. This scope determines what variables your code has access to, how new variables will interact with the rest of your code, and a few other things. The best way to think of scope is as a partition to help you separate different parts of your code from one another.

### Types of Scopes in JavaScript: 

- Block scope
- Function scope
- Local scope
- Global scope

### 1. Global scope :
- Any time you define a a variable at the top level of a file (outside any function/curly braces) it is considered global scope and can be accessed ANYWHERE in your entire application.
- This global access makes writing code easier at first since you don't have to worry about variables being blocked by different scopes, but as you start to write more complex code this quickly becomes difficult to manage. This problem is even worse when you have multiple files.

```html
<!DOCTYPE html>
<html>
<body>
    <script>
 
        // Global scope
        var x = '1'
        const y = '2'
        let z = '3'
 
        console.log(x);  
        console.log(y);   
        console.log(z);   
 
        function print() {
            //aslo accessible inside functions
            console.log(x);   
            console.log(y);  
            console.log(z);  
        }
        print();         
    </script>
</body>
</html>
```
Output :
```ts
1
2
3
1
2
3
```

### 2. Local scope :

Variables declared inside a function become local to the function. Local variables are created when a function starts and deleted when the function is executed. Local variables have Function Scope which means that they can only be accessed from within the function.

```html
<!DOCTYPE html>
<html>
<body>
    <script>
        function print() {
            var x = '1'
            console.log(x)
        }
        print(); 
        console.log(x); // returns error
    </script>
</body>
</html>
```

Output :
```ts
1
x is not defined
```

### 3. Block scope :

- Earlier JavaScript had only Global Scope and Function Scope. `let` and `const` are the two new important keywords that were introduced by the ES6 and these two keywords provide `Block Scope` in JavaScript. 
- Variables that are declared inside a `{ }` block cannot be accessed from outside the block.
- Variables declared with the `var` keyword cannot have block scope and they can be declared inside a { } block and can be accessed from outside the block.

Example :
```ts
function print() {
  if (true) {
    var a = "1"
    let b = "2"
    const c = "3"
  }
  console.log(a)
  console.log(b)
  console.log(c)
}
print()
```

Output :
```ts
1
b is not defined
c is not defined
```

### 4. Function scope :

JavaScript has function scope and each function creates a new scope. Variables defined inside a function are not accessible from outside the function and variables declared with var, let and const are quite similar when declared inside a function.

Example : 
```html
<!DOCTYPE html>
<html>
<body>
    <script>
        function print() {
            var x = '1'
            console.log(x)
        }
        print();     
        console.log(x); // returns error
    </script>
</body>
</html>
```

Output :
```ts
1
x is not defined
```

### Next topic - [Shadowing in js](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/blob/master/c-Scope/2-Shadowing.md)
