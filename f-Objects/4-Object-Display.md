## Displaying the Object in a Loop
- The properties of an object can be loop using a `for in loop` .
- Example
```ts
const person = {
  name: "John",
  age: 30,
};

for (let x in person) {
  console.log(person[x])
};
```
- Output
```ts
John
30
```

## Using Object.values()
- Any JavaScript object can be converted to an array of objct values using `Object.values()` .
- Example :
```ts
const person = {
  name: "John",
  age: 30,
};

const arr = Object.values(person);
cobnsole.log(arr)
```
- Output :
```ts
["John" , 30]
```




## Using Object.keys()
- Any JavaScript object can be converted to an array of objct keys using `Object.keys()` .
- Example :
```ts
const person = {
  name: "John",
  age: 30,
};

const arr = Object.keys(person);
cobnsole.log(arr)
```
- Output :
```ts
["name" , "age"]
```
