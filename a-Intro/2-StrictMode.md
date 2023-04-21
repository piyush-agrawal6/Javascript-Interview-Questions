### What is strict mode in js?

`Strict Mode` was a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This strict context prevents certain actions from being taken and throws more exceptions. The statement “use strict”; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.

#### Benefits of using `‘use strict’` :

Strict mode makes several changes to normal JavaScript semantics.

- Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
- Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.
- Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
- It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
- It disables features that are confusing or poorly thought out.
- Strict mode makes it easier to write “secure” JavaScript.

### Strict Mode in Variable

In strict mode, using a variable without declaring it throws an error.

`Note: You need to declare strict mode at the beginning of the program. If you declare strict mode below some code, it won't work.`

For example,

```
console.log("some code");

// 'use strict' is ignored
// must be at the top
"use strict";

x = 21; // does not throw an error
```

Correct code,

```
'use strict';

// Error
myVariable = 9;
```

### Strict Mode in Function

You can also use strict mode inside a function. For example,

```
myVariable = 9;
console.log(myVariable); // 9

function hello() {

    // applicable only for this function
    'use strict';

    string = 'hello'; // throws an error
}

hello();
```

If you use `'use strict'` ; inside a function, the code inside the function will be in strict mode.

In the above program, `'use strict' ;` is used inside the `hello()` function. Hence, the strict mode is applicable only inside the function.


### Things Not Allowed in Strict Mode

1. Undeclared variable is not allowed.
```
'use strict';

a = 'hello'; // throws an error
```

2. Undeclared objects are not allowed.
```
'use strict';

person = {name: 'Carla', age: 25}; // throws an error
```

3. Deleting an object is not allowed.
```
'use strict';

let person = {name: 'Carla'};

delete person; // throws an error
```

4. Duplicating a parameter name is not allowed.
```
"use strict";

function hello(p1, p1) { console.log('hello')}; // throws an error

hello();
```

5. Assigning to a non-writable property is not allowed.
```
'use strict';

let obj1 = {};

Object.defineProperty(obj1, 'x', { value: 42, writable: false });

// assignment to a non-writable property
obj1.x = 9; // throws an error
```

6. Assigning to a getter-only property is not allowed.
```
'use strict';

let obj2 = { get x() { return 17; } };

// assignment to a getter-only property
obj2.x = 5; // throws an error
```

7. Assigning to a new property on a non-extensible object is not allowed.
```
'use strict';

let obj = {};
Object.preventExtensions(obj);

// Assignment to a new property on a non-extensible object
obj.newValue = 'new value'; // throws an error
```

8. Octal syntax is not allowed.
```
'use strict';

let a = 010; // throws an error
```

9. The variable name arguments and eval are not allowed.
```
'use strict';

let arguments = 'hello'; // throws an error

let eval = 44;
```

10. You cannot also use these reserved keywords in strict mode.

`implements` `interface` `let` `package` `private` `protected` `public` `static` `yield`


### For more details - [docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
### Next Topic - [DOM/BOM](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/blob/master/a-Intro/3-DOM-BOM.md)
