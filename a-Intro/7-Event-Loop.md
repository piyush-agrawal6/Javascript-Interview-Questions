## What is an event loop in JavaScript?

![javascript-event-loop](https://user-images.githubusercontent.com/100460788/233776906-dc41f5b2-8242-4ca2-94b8-b9756100822e.png)

The `event loop` is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading. Let’s take a look at what happens on the back-end.

### Call stack

The call stack is responsible for keeping track of all the operations in line to be executed. Whenever a function is finished, it is popped from the stack.

![Screenshot_10](https://user-images.githubusercontent.com/100460788/233777065-e1dcb823-ff10-493a-a709-764bcfadd940.png)

The event queue is responsible for sending new functions to the stack for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution.

![Screenshot_11](https://user-images.githubusercontent.com/100460788/233777083-433a6106-4872-4ea2-a8ca-b067d24adc6d.png)

Whenever an async function is called, it is sent to a browser API. These are APIs built into the browser. Based on the command received from the call stack, the API starts its own single-threaded operation.

An example of this is the setTimeout method. When a setTimeout operation is processed in the stack, it is sent to the corresponding API which waits till the specified time to send this operation back in for processing.

Where does it send the operation? The event queue. Hence, we have a cyclic system for running async operations in JavaScript. The language itself is single-threaded, but the browser APIs act as separate threads.

The event loop facilitates this process; it constantly checks whether or not the call stack is empty. If it is empty, new functions are added from the event queue. If it is not, then the current function call is processed.

![Screenshot_12](https://user-images.githubusercontent.com/100460788/233777102-2d859d08-1f69-4045-a7e0-19a843a9a2e0.png)

### For more details - [Docs](https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/)

### Next Topic - [Data Types In JS](https://github.com/piyush-agrawal6/Javascript-Interview-Questions/tree/master/b-DataTypes)
