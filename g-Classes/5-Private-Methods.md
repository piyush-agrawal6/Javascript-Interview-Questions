## JavaScript private fields
- ES2022 allows you to define `private fields` for a `class`. To define a private field, you prefix the field name with the `#` sign.
- For example, the following defines the Circle class with a private field `radius`:
```ts
class Circle {
  #radius;
  constructor(value) {
    this.#radius = value;
  }
  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }
}
```
In this example:
- First, define the private field `#radius` in the class body.
- Second, `initialize` the `#radius` field in the `constructor` with an argument.
- Third, calculate the area of the circle by accessing the #radius private field in the getter method.
- The following creates a new instance of the Circle class and calculates its area:
```ts
let circle = new Circle(10);
console.log(circle.area); // 314.159
```
- Because the #radius is a private field, you can only access it inside the Circle class. 
- In other words, the #radius field is invisible outside of the Circle class.
- Trying to access the private field outside of the class will generate a syntax error:
```ts
console.log(circle.#radius);   // Syntax error
```
