// var vs let vs const

// 1) Scope
// Function scope: The scope created with a function.
// var is functional scope.
//
{
  var a = 5;
}
console.log(a);
// block scope: The scope for code running in block.The scope created with a pair of curly braces{}.
// let const are block scope

{
  let b = 5;
}
console.log(b);
// b is not defined

{
  const c = 5;
}
console.log(c);
//c is not defined





// 2.variable shadowing
function test() {
  var a = "Hii";
  //   let b = "Hello";
  let c = "Hows you";
  if (true) {
    //shadowing
    let a = "Bye";
    //     var b = "Goodbye";
    let c = "I m fine";
    console.log(a);
    console.log(c);
  }
  console.log(a);
  console.log(c);
}
test()
// var can shadowed by let
// let can be shadowed by let , but
// let cant be shadowed by var




// 3.variable declaration
// var can be declared as many as time we want
// but let and const cannot be re declared
// var a;
// var a;
// let b;
// let b;
// const c
// const c



// 4.variable declaration without initialization
// var a; //possible
// let b; //possible
// const c; //not possible



// 5.variable hoisting
// Already discussed before in hoisting module

