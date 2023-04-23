## Difference between Window, Document and Screen in JavaScript

Window object and Document object often look alike and confusing ??

If yes , Then its time to resolve it. Lets Go.

Here I am assuming that you already know about DOM and BOW.

![Screenshot_2](https://user-images.githubusercontent.com/100460788/233690248-4cb7fe7b-1a27-4fc0-a0b7-ca30783796c6.png)

### Window Vs Document

`Window object` : It is the top most object and outermost element of the object hierarchy as shown in Figure 1.

`Document object` : Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page. Using document object, JavaScript can modify, add and delete the HTML elements, attributes CSS styles in the page

- The window object represents a window/tab containing a DOM document where as document object is property of window object that points to the DOM document loaded in that window.
- You can access a document object either using `window.document` property or using `document` object directly as window is global object. In the below example, title is the property of document object.

![Screenshot_6](https://user-images.githubusercontent.com/100460788/233692021-45ed5935-111a-4c75-956d-7da04128d9d3.png)

- The other major difference is that both window object and document object have properties and methods. Few method names are same in both objects but with different behavior. In the below example `window.open()` opens a new tab or window and `document.open()` creates a blank document within the window.

![Screenshot_7](https://user-images.githubusercontent.com/100460788/233692034-b1bb14cb-4a55-48ee-9e7e-4206e4730ebf.png)

### Screen

`Screen` is the window property that holds information of browser screen. It refers to screen object associated with that window object. Used to display screen `width`, `height`, `colorDepth`, `pixelDepth` etc

- Similar to document screen can be accessed either by `window.screen` or `screen` object directly. Screen object doesn't have any methods as in window and document objects.

![Screenshot_8](https://user-images.githubusercontent.com/100460788/233692050-5769c038-b3c1-41cd-9d36-a2c08fc450ca.png)

### For more details - [Docs](https://www.geeksforgeeks.org/differences-between-document-and-window-objects/)

### Next Topic - [JS Engine](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/blob/master/a-Intro/5-Js-Engine.md)
