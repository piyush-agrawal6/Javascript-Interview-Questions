## What is shadowing?

`Shadowing : `

In the global scope, `shadowing` occurs when a variable declared with the `var` keyword has the same name as a variable declared with the `let` or `onst` keyword. When this happens, the global variable is said to be shadowed by the function-scoped variable.

Example :
```ts
let a = 'Hey';

function func() {
    let a = 'Hey how';
    if (true) {
        let a = 'Hey how are you?'; 
        console.log(a);
    }
    console.log(a);
}
console.log(a)

func();
```

Output:
```ts
Hey
Hey how are you?
Hey how
```

`Illegal Shadowing :`

Now, while shadowing a variable, it should not cross the boundary of the scope, i.e. we can shadow var variable by let variable but cannot do the opposite. So, if we try to shadow let variable by var variable, it is known as Illegal Shadowing and it will give the error as “variable is already defined.”

Example :
```ts
function func() {
  var a = "Joy";
  let b = "Joy";

  if (true) {
    let a = "Piyush"; // Legal Shadowing
    var b = "Piyush"; // Illegal Shadowing
    console.log(a); // It will print 'Piyush'
    console.log(b); // It will print error
  }
}

func();
```

### Next Topic - [Interview Questions](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/blob/master/c-Scope/3-Questions.md)
