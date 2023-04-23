## What are Errors in JavaScript?

JavaScript code can encounter different errors when it is executed. Errors can be caused by programming mistakes, incorrect input, or other unforeseeable events.

Errors in programming can be divided into two types.

These are:

- `Program Error` : - In this case, the program might need to handle this error through its error handlers. An example could be network disconnection, timeout error, etc.
- `Developer Error` : - The programmer has caused an error. It can be a syntax error, a logical error, a semantic error, etc.

## The 6 error types in JavaScript

The following are the 6 most common error constructors in JavaScript:

### 1. Syntax error :

The error occurs when you use a predefined syntax incorrectly.

Run the code below to see a syntax error. It will be thrown because there are no closing braces ‘}’ for the function. We can see this here:

```
const ourFunction = () =>{
console.log(hello)
// Missing }
```

Output :

```
}
^
SyntaxError: Unexpected token }
```

### 2. Reference Error :

In a case where a variable reference can't be found or hasn't been declared, then a Reference error occurs.

```
console.log(x);
```

Output:

```
console.log(x);
            ^
ReferenceError: x is not defined
```

### 3. Type Error :

An error occurs when a value is used outside the scope of its data type.

```
let num = 15;
console.log(num.split(""));
```

Output:

```
console.log(num.split("")); //Converting a number to an array will throw an error
                ^
TypeError: num.split is not a function
```

### 4. Evaluation Error :

Current JavaScript engines and EcmaScript specifications do not throw this error. However, it is still available for backward compatibility. The error is called when the `eval()` backward function is used, as shown in the following code block:

```
try{
  throw new EvalError("'Throws an error'")
}catch(error){
  console.log(error.name, error.message)
}
```

Output:

```
EvalError 'Throws an error'
```

### 5. RangeError :

There is an error when a range of expected values is required, as shown below:

```
const checkRange = (num)=>{
  if (num < 30) throw new RangeError("Wrong number");
  return true
}

checkRange(20);
```

Output:

```
 if (num < 30) throw new RangeError("Wrong number");
                ^
RangeError: Wrong number
```

### 6. URI Error :

When the wrong character(s) are used in a URI function, the error is called.

```
console.log(decodeURI("https://github.com/piyush-agrawal6"))
console.log(decodeURI("%abcd"));
```

Output:

```
console.log(decodeURI("%abcd"));
            ^
URIError: URI malformed
```

### 7. InternalError :

This error occurs internally in the JS engine, especially when it has too much data to handle and the stack grows way over its critical limit.

This occurs when the JS engine is overwhelmed by too many recursions, too many switch cases, etc

```
switch(num) {
 case 1:
 ...
 break
 case 2:
 ...
 break
 ... up to 1000 cases
 }
```

Output: Its output will be like `InternalError` .

## Error Handling : The try...catch...finally Statement

Exception handling has been added to JavaScript in recent versions. Exceptions are handled by JavaScript's `try...catch...finally` construct and throw operator.

After the `try` block, there must either be a `catch` block or a `finally` block (or both). The catch block is executed if an exception occurs in the try block. After `try/catch` , finally is executed unconditionally. Let's see an example:

```
function myFunc() {
    var num = 50;
     try {
            alert("Value of variable a is : " + num );
        }
    catch ( error ) {
        alert("Error: " + error.description );
        }
    finally {
        alert("Finally, block will always execute!" );
        }
}
myFunc()
```

Output: The below statements will be shown in an alert box.

```
Value of variable a is : 50
Finally, block will always execute!
```

### Next Topic - [Interview questions](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/blob/master/b-DataTypes/5-Questions.md)
