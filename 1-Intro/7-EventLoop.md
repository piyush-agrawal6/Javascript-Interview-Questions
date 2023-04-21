What is an event loop in JavaScript?

The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading. Let’s take a look at what happens on the back-end.

For Better Understanding follow the video tutorial : https://youtu.be/8zKuNo4ay8E

The call stack is responsible for keeping track of all the operations in line to be executed. Whenever a function is finished, it is popped from the stack.

img1 - call stack -https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_0-B82gFTkQU6wLRoTKnj_qrIFUCzAoa9vsUMqyKfh9rDgIz

The event queue is responsible for sending new functions to the stack for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution.

Whenever an async function is called, it is sent to a browser API. These are APIs built into the browser. Based on the command received from the call stack, the API starts its own single-threaded operation.

An example of this is the setTimeout method. When a setTimeout operation is processed in the stack, it is sent to the corresponding API which waits till the specified time to send this operation back in for processing.

Where does it send the operation? The event queue. Hence, we have a cyclic system for running async operations in JavaScript. The language itself is single-threaded, but the browser APIs act as separate threads.

The event loop facilitates this process; it constantly checks whether or not the call stack is empty. If it is empty, new functions are added from the event queue. If it is not, then the current function call is processed.

img2 - event loop - https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0_NC7OYkgHvpP4e6cd4mwwIxn8bMVy6XiBB0zS6roiNiJQaEY
