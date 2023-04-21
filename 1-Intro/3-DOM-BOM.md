// DOM
DOM stands for Document Object Model. It is a standard defined by W3C (World Wide Web Consortium). DOM is a programming interface (API) for representing and interacting with HTML, XHTML and XML documents. It organizes the elements of the document in a tree structure (DOM tree) and in the DOM tree, all elements of the document are defined as objects (tree nodes) which have properties and methods.

In simple terms, the DOM is a way to represent the webpage in a structured hierarchical manner so that it will become easier for programmers and end-users to glide through the whole document. With the DOM, we can easily access and manipulate various tags available in DOM, attributes, IDs, classes, or the whole piece elements using commands or methods provided by Document objects and one of the most popular is "getElementById()" to access the specific element by using the ID attribute.

DOM tree objects can be accessed and manipulated with the help of any programming language since it is cross-platform and language-independent. Typically, we manipulate the DOM tree with the help of JavaScript and jQuery using multiple ways of accessing elements by their class names, ID, or the name of the element.

// DOM API
// DOM API Objects
-window
The window object represents an open window containing a DOM document.
-document
The document object represents the HTML document in a specific window.
-history
This object contains information about the URLs visited by the client.
-location
This object contains information about the current URL.
-navigator
This object contains information about the client.

// DOM API Methods
DOM methods are actions that you can perform on document elements.
-appendChild
This method appends an element as a child to the object.
-createElement
This method creates an instance of the element for the specified tag.
-reload
This method reloads the current document.
-removeNode
This method removes the object from the document hierarchy.

A Simple DOM Tree
<HTML>
<HEAD>
 <TITLE>Your Title</TITLE>
 <SCRIPT src=""></SCRIPT>
</HEAD>
<BODY>
 <DIV>Your Div Text</DIV>
 <P>Your Para Text</p>
</BODY>
</HTML>


// BOM
BOM stands for Browser Object Model. Unlike DOM, there is no standard defined for BOM, hence different browsers implement it in different ways. Typically, the collection of browser objects is collectively known as the Browser Object Model.

BOM's main task is to manage browser windows and enable communication between the windows. Each HTML page that is loaded into a browser window becomes a Document object and document object is an object in the BOM. You can say BOM is a superset of DOM. BOM has many objects, methods, and properties that are not the part of the DOM structure.

The important BOM objects are as:
document
location
history
navigator
screen
frames

For better understanding - https://www.dotnettricks.com/learn/javascript/dom-bom