There are two types of data types in JavaScript:

Primitive Data Types − This is the predefined data type that is provided by JavaScript for different usages. These are also known as the in-built data types.

Non-Primitive Data Types − These data types are derived from the primitive data types and work as a reference. Therefore, they are also known as reference data types.

1.Primitive data types
The primitive data types are as follows:

String - It represents a series of characters and is written with quotes. A string can be represented using a single or a double quote.
Example :
var str = "Piyush Agrawal";

Number - It represents a number and can be written with or without decimals.
Example :
var x = 3; 

BigInt - This data type is used to store numbers which are above the limitation of the Number data type. It can store large integers and is represented by adding “n” to an integer literal.
Example :
var bigInteger =  234567890123456789012345678901234567890;

Boolean - It represents a logical entity and can have only two values : true or false. Booleans are generally used for conditional testing.
Example :
var a = 2;
var b =  3;
var c =  2;
(a == b) // returns false
(a == c) //returns true

Undefined - When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined.
Example :
var x; // value of x is undefined
var y = undefined; // we can also set the value of a variable as undefined

Null - It represents a non-existent or a invalid value.
Example :
var z = null;

Symbol - It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.
Example :
var symbol1 = Symbol('symbol');

typeof of primitive types :
typeof "John Doe" // Returns "string"
typeof 3.14 // Returns "number"
typeof true // Returns "boolean"
typeof 234567890123456789012345678901234567890n // Returns bigint
typeof undefined // Returns "undefined"
typeof null // Returns "object" (kind of a bug in JavaScript)
typeof Symbol('symbol') // Returns Symbol


2. Non-primitive types
In the above examples, we can see that the primitive data types can store only a single value. To store multiple and complex values, we have to use non-primitive data types.

The non-primitive data types are as follows:

Object: The Object is a non-primitive data type. It is used to store collections of data. An object contains properties, defined as a key-value pair. A property key (name) is always a string, but the value can be any data type, such as strings, numbers, Booleans, or complex data types like arrays, functions, and other objects.
Example:
// Collection of data in key-value pairs
var obj = {
   x:  43,
   y:  "Hello world!",
   z: function(){
      return this.x;
   }
}

Array: The Array data type is used to represent a group of similar values. Every value in an array has a numeric position, called its index, and it may contain data of any data type-numbers, strings, Booleans, functions, objects, and even other arrays. The array index starts from 0 so that the first array element is arr[0], not arr[1].
Example:
// Collection of data as an ordered list
var arr = [5, "Hello", true, 4.1];
