// question

//1)
function random() {
  var x;
  x++;
  console.log(x);
  x = 21;
}
random();

//2)
var a = 10;
{
  var a = -10;
}
let b = a;
{
  let b = -20;
}
console.log(b);

//3) Difference between var and let keyword in javascript.
// -From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015.
// -The keyword 'Var' has a function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope.
// -In ECMAScript 2015, let and const are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.

