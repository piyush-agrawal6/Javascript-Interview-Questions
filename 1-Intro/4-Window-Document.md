For better understanding - https://www.geeksforgeeks.org differences-between-document-and-window-objects/


// Document Object: 
The document object represent a web page that is loaded in the browser. By accessing the document object, we can access the element in the HTML page. With the help of document objects, we can add dynamic content to our web page. The document object can be accessed with a window.document or just document.

Methods of Document:

// Syntax:
document.method_name;

// The lists of some most commonly used methods are listed below:
addEventListener(): It is used to attach an event handler to the specified element.
close(): It is used to close the output stream.
createElement(): It is used to create HTML element .
createEvent(): It is used to create a new events object.
getElementById(): It returns the object of the given ID. If no object with that id exists then it returns null.
getElementsByClassName(): It returns an object containing all the elements with the specified class names in the document as objects.
getElementsByName(): It returns an object containing all the elements with the specified name in the document as objects.
getElementsByTagName(): It returns an object containing all the elements with the specified tag names in the document as objects.
querySelector(): It returns the first element that matches a specified CSS selector(s) in the document.
querySelectorAll(): It returns a collection of an element’s child elements that matches a specified CSS selector(s) in the document
removeEventListener(): It removes the event handler from an element that has an attached event.
write(): It is used to write some content or javascript code in the document.


// Window Object: 
The window object is the topmost object of the DOM hierarchy. It represents a browser window or frame that displays the contents of the webpage. Whenever a window appears on the screen to display the contents of the document, the window object is created. 

// Syntax:
window.property_name;
The properties of Window objects that are commonly used are listed in the below table:

// Properties of the window:
Closed: It holds a Boolean value that represents whether the window is closed or not.
Document: It returns a reference to the document object of that window.
History: It provides information on the URLs visited in the current window.
Location: It contains the URL of the current window.
innerHeight: It is used to get the height of the content area of the browser window.
innerWidth: It is used to get the width of the content area of the browser window.
Name: It contains the name of the referenced window.
Window: It returns the current window or frame.
outerHeight: It will get the height of the outside of the browser window.
outerWidth: It will get the width of the outside of the browser window.
Status: It overrides the default status and places a message in the status bar.

// Syntax:
window.method_name;

// The methods of Window objects that are commonly used are listed in the below table:
alert(): It is used to display an alert box. It displays a specified message along with an OK button and is generally used to make sure that the information comes through the user.
clearInterval(): It clears the interval which has been set by the setInterval() function before that.
clearTimeout(): It clears the timeout which has been set by the setTimeout()function before that.
close(): It is used for closing a certain window or tab of the browser which was previously opened.
focus(): It is used to give focus to an element in the current window.
open(): It is used to open a new tab or window with the specified URL and name.
resizeBy(): It is used to resize a window by the specified amount.
resizeTo(): It is used to resize a window to the specified width and height.
scrollBy(): It is used to scroll the document by the given number of pixels.
scrollTo(): It is used to scroll to a particular set of coordinates in the document.
setInterval(): It repeats a given function at every given time interval.
setTimeout(): It executes a function, after waiting a specified number of milliseconds.
stop(): It is used to stop the window from loading resources in the current browsing context.