### Difference between BOM and DOM in JavaScript

![Screenshot_1](https://user-images.githubusercontent.com/100460788/233662372-0e25db06-fdf6-4ec1-9c2d-ca44fd382269.png)

### 1. Browser Object Model (BOM)
BOM is a Browser Object Model, which is a window object supported by all browsers representing a browser window consisting of navigator, history, screen, location and document objects which are children of windows. BOM can function to check an event from windows with window.addEventListener and can perform manipulation using `window.innerHeight` and `window.innerWidth` .

There are several methods that we can use from the BOM, including `alert()` , `prompt()` , and `console` .


#### Method alert()

The `alert()` method is one of the BOM methods used to display warnings or information. We can use an example as below:
```
window.alert("Hello");
```

or

```
alert("Hello");
```
![aAugu](https://user-images.githubusercontent.com/100460788/233665060-8e98e70b-6cbe-477c-8379-688871f76230.png)


#### Method prompt()

The `prompt()` method is used to display a browser dialog and can be filled in by the user. The prompt() dialog will return a string value from the user when performing sting input in the prompt() dialog. For example, as shown below:
```
let message = prompt('Your Name?');![0_w1t2cLUc70xr93wC](https://user-images.githubusercontent.com/100460788/233667507-655431b1-f675-424f-9e04-4c40ec7e2db2.png)

```
![0_vdDzPDRkls9eQLZY](https://user-images.githubusercontent.com/100460788/233665460-925d318f-8628-4f08-902c-f6dcacd5265c.png)

#### Console methods

The `console method` is a very useful method for a frontend developer, because the console method can be used to eliminate bugs in the code that has been created. Example console code below:

```
console.log('Code with me');
console.warn('Code with me');
console.info('Code with me');
console.error('Code with me');
```
![console-sidebar](https://user-images.githubusercontent.com/100460788/233666355-e7050424-3a2e-44f3-9386-1a6527e8e98f.png)


### 2. Document Object Model (DOM)

DOM is a collection of functions and attributes / data that we use to create JavaScript programs that we can call APIs (Application Programming Interface). DOM can be used in HTML, XM and SVG. DOM is not only used for JavaScript programming but can be used for other programming as well.
Inside the document object, we will find the functions and attributes that we can use to manipulate the HTML document.

DOM tree objects can be accessed and manipulated with the help of any programming language since it is cross-platform and language-independent. Typically, we manipulate the DOM tree with the help of JavaScript and jQuery using multiple ways of accessing elements by their class names, ID, or the name of the element.

DOM has a structure in the form of a tree we can call DOMtree.

![dom](https://user-images.githubusercontent.com/100460788/233667146-15e2efc5-20c4-48f9-9cc8-cf947c3bab5a.png)

Take a look at the structure of this DOMtree, we will know the structure of the HTML code that we will manipulate using the DOM. Examples are below:
```
document.head;
document.body;
document.title.length;
```
Output in console will look like:

![0_w1t2cLUc70xr93wC](https://user-images.githubusercontent.com/100460788/233667576-763a42c0-7222-48ad-a021-73fc546bfd26.png)

#### And we can access more specific HTML elements by using some of the functions below.

- `getElementById()` function to select elements based on attributes id.
- `getElementByName()` function to select elements based on attributes name.
- `getElementByClassName()` function to select elements based on attributes class.
- `getElementByTagName()` function to select elements by tag name.
- `getElementByTagNameNS()` function to select elements by tag name.
- `querySelector()` function to select elements based on query.
- `querySelectorAll()` function to select elements based on query.
- for more understanding - [Docs](https://www.dotnettricks.com/learn/javascript/dom-bom)
