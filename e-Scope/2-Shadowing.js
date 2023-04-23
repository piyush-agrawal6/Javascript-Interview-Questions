// // What is shadowing?

// Shadowing:
// Now, when a variable is declared in a certain scope having the same name defined on its outer scope and when we call the variable from the inner scope, the value assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space. This is known as Shadowing or Variable Shadowing. In JavaScript, the introduction of let and const in ECMAScript 6 along with block scoping allows variable shadowing.

// Code Example:
function func() {
  let a = "Piyush";

  if (true) {
    let a = "Piyush Agrawal"; // New value assigned
    console.log(a);
  }

  console.log(a);
}
func();

// Output:
// GeeksforGeeks
// Geeks

// Illegal Shadowing:
// Now, while shadowing a variable, it should not cross the boundary of the scope, i.e. we can shadow var variable by let variable but cannot do the opposite. So, if we try to shadow let variable by var variable, it is known as Illegal Shadowing and it will give the error as “variable is already defined.”

// Example:
function func() {
  var a = "Joy";
  // let b = "Joy";

  if (true) {
    let a = "Piyush"; // Legal Shadowing
    var b = "Piyush"; // Illegal Shadowing
    console.log(a); // It will print 'Piyush'
    console.log(b); // It will print error
  }
}
func();

// Output:
// Identifier 'b' has already been declared
