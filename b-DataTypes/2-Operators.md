## JavaScript Operators

JavaScript operators operate the operands (values and variables), these are `symbols` that are used to manipulate a certain value or `operand`. Operators are used to performing specific `mathematical` and `logical` computations on operands.

### There are various operators supported by JavaScript.

- JS Arithmetic Operators
- JS Assignment Operators
- JS Comparison Operators
- JS Logical Operators
- JS Bitwise Operators
- JS Ternary Operators
- JS typeof Operator

### 1. JavaScript Arithmetic Operators

Arithmetic operators are used to perform `arithmetic calculations`.

| Operator | Name                        | Example        |
| -------- | --------------------------- | -------------- |
| `+`      | Addition                    | `x + y`        |
| `-`      | Subtraction                 | `x - y`        |
| `*`      | Multiplication              | `x * y`        |
| `/`      | Division                    | `x / y`        |
| `%`      | Reminder                    | `x % y`        |
| `++`     | Increment (increments by 1) | `++x` or `x++` |
| `--`     | Decrement (decrements by 1) | `--x` or `x--` |
| `**`     | Exponentiation (Power)      | `x ** y`       |
| `+a`     | Unary                       | `+x`           |
| `-a`     | Negation                    | `-x`           |

Example: In this example we will use all arithmetic operators.

```
// Addition Operator
   let a = 1 + 2
   console.log(a);

// Subtraction Operator
   let b = 10 - 7
   console.log(b);

// Multiplication Operator
   let c = 3 * 3
   console.log(c);

// Division Operator
   let d = 1 / 2
   console.log(d);

// Modulas Operator
   let e = 9 % 5
   console.log(e)

// Exponentian Operator
   let f = 2 ** 3
   console.log(f)

// Increament Operator
   var g = 2;
   g1 = g++;
   console.log(g)

// Decrement Operator
   var h = 2;
   h1 = h--;
   console.log(h)

// Unary plus Operator
   var i = 3;
   i1 = +i;
   console.log(i1)

// Negation Operator
   var j = 3;
   j1 = -j;
   console.log(j1)
```

Output :

```
3
3
9
0.5
4
8
3
1
3
-3
```

### 2. JavaScript Assignment Operators

`Assignment operators` are used to `assign` values to variables.

| Operator | Name                      | Example                    |
| -------- | ------------------------- | -------------------------- |
| `=`      | Assugnment operator       | `Y = 7`                    |
| `+=`     | Addition assignment       | `Y += 1 gives Y = Y + 1`   |
| `-=`     | Subtraction assignment    | `Y -= 1 gives Y = Y - 1`   |
| `*=`     | Multiplication assignment | `Y *= 1 gives Y = Y * 1`   |
| `/=`     | Division assignment       | `Y /= 1 gives Y = Y / 1`   |
| `%=`     | Remainder assignment      | `Y %= 1 gives Y = Y % 1`   |
| `**=`    | Exponentiation Assignment | `Y **= 1 gives Y = Y ** 1` |

Example: In this example we will use all assignment operators.

```
 // Assignment Operator
    let a = 2;
    console.log(a);

 // Addition Assignment Operator
    a += 1
    console.log(a);

 // Subtraction Assignment Operator
    a -= 1
    console.log(a);

 // Multiplication Assignment
    a *= 2
    console.log(a);

 // Division Assignment Operator
    a /= 2;
    console.log(a);

 // Modulus Assignment Operator
    a %= 2
    console.log(a);

 // Exponential Assignment Operator
    a **= 2
    console.log(a);
```

Output :

```
2
3
1
4
1
0
4
```

### 3. JavaScript Comparison Operators

`Comparison operators` compare two values and return a boolean value, either `true` or `false` .

| Operator | Description                                                                                      | Example   |
| -------- | ------------------------------------------------------------------------------------------------ | --------- |
| `==`     | `Equal to` : returns true if the operands are equal                                              | `x == y`  |
| `!=`     | `Not equal to` : returns true if the operands are not equal                                      | `x != y`  |
| `===`    | `Strict equal to` : true if the operands are equal and of the same type                          | `x === y` |
| `!==`    | `Strict not equal to` : true if the operands are equal but of different type or not equal at all | `x !== y` |
| `>`      | `Greater than` : true if left operand is greater than the right operand                          | `x > y`   |
| `>=`     | `Greater than or equal to` : true if left operand is greater than or equal to the right operand  | `x >= y`  |
| `<`      | `Less than` : true if the left operand is less than the right operand                            | `x < y`   |
| `<=`     | `Less than or equal to` : true if the left operand is less than or equal to the right operand    | `x <= y`  |

Example: In this example, we will use all comparison operators.

```
 // Assigning values
    let val1 = 5;
    let val2 = 5;

 // Equality Operator
    console.log(val1 == val2);

 // Strict equality Operator
    console.log(val1 === val2);

 // Inequality Operator
    console.log(val1 != val2);

 // Strict Inequality Operator
    console.log(val1 !== val2);

 // Greater than Operator
    console.log(val1 > val2);

 // Greater than or equal Operator
    console.log(val1 >= val2);

 // Less than Operator
    console.log(val1 < val2);

 // Less than or equal Operator
    console.log(val1 <= val2);
```

Output:

```
true
true
false
false
false
true
false
true
```

### 4. JavaScript Logical Operators

`Logical operators` perform logical operations and return a boolean value, either `true` or `false` .

| Operator | Description                                                                            | Example  |
| -------- | -------------------------------------------------------------------------------------- | -------- |
| `&&`     | `Logical AND` : true if both the operands are true, else returns false                 | `x && y` |
| `ll`     | `Logical OR` : true if either of the operands is true; returns false if both are false | `x ll y` |
| `!`      | `Logical NOT` : true if the operand is false and vice-versa.                           | `!x`     |

Example: In this example, we will use all logical operators.

```
// logical AND
   console.log(true && true);  // prints true
   console.log(true && false);  // prints false

// logical OR
   console.log(true || false);  // prints true
   console.log(false || false);  // prints false

// logical NOT
   console.log(!true);  // prints false
   console.log(!false);  // prints true
```

### 5. JavaScript Bitwise Operator

The `bitwise operator` in JavaScript is used to convert the number to a `32-bit` binary number and perform the bitwise operation. The number is converted back to the `64-bit` number after the result.

| Operators | Name                         | Example   |
| --------- | ---------------------------- | --------- |
| `&`       | Bitwise AND                  | `x & y`   |
| `l`       | Bitwise OR                   | `x l y`   |
| `^`       | Bitwise XOR                  | `x ^ y`   |
| `~`       | Bitwise NOT                  | `~x`      |
| `<<`      | Left shift                   | `x << y`  |
| `>>`      | Sign-propagating right shift | `x >> y`  |
| `>>>`     | Zero-fill right shift        | `x >>> y` |

Bitwise operator in detail - [Link](https://www.programiz.com/javascript/bitwise-operators)

### 6. JavaScript Ternary Operator

The `ternary operator` has three operands. It is the simplified operator of `if/else` .

Example: In this example, we will use the ternary operator.

```
 // Assigning values
    let marks = 40

 // Ternary Operator
    let result = (marks > 30) ? "Pass" : "Fail" ;

    console.log(result);
```

Output:

```
Pass
```

### 7. JavaScript typeof Operator

It returns the data type of its operand in the form of a string. The operand can be any object, function, or variable.

Example: In this example, we will use typeof operator.

```
var a = 17;
var b = "Piyush";
var c = "";
var d = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
```

Output:

```
number
string
string
object
undefined
```

### Next Topic - [Coercion in js](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/blob/master/b-DataTypes/3-Coercion.md)
