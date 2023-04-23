/**
 * ! Event Bubbling , capturing , propagation
 */

/**
 * * What does “event bubbling” mean in JavaScript?
 */
//  Event bubbling is a type of event propagation where events “bubble” up from the innermost element to the outermost element. So if you have a click event on a button inside of a div, the event will first be triggered on the button, then on the div, and then on any other parent elements.Event bubbling is also known as Event Propagation or Event Delegation.

/**
 * * Can I prevent event bubbling?
 */
// Yes! In your event handler, you can add the stopPropagation() method to the event. For example, you could add the following to an onClick() event handler. e.stopPropagation().

/**
 * * What is the difference between stopPropagation and preventDefault methods?
 */
//  The stopPropagation method will stop an event from bubbling up the DOM tree, while the preventDefault method will prevent the default action of an event from being triggered.

/**
 * * When would you use event delegation?
 */
//  Event delegation can be extremely useful when you want to automatically set an event listener on child elements. For example, say you want to add an event listener to all the <li> elements of an <ul>. However, the unordered list is dynamically generated, based on some data received from an API call. It would be impossible to attach an event handler to each <li> element individually, but you could attach it to the <ul> element and it would be delegated to each of the child <li> elements!

/**
 * * What does “event capturing" mean in JavaScript?
 */
//  In the case of Event Capturing, the event is first captured and also handled by the outermost element, and then the event is propagated to the innermost element.

/**
 * * Syntax , event bubbling
 */
//  button.addEventListener("event", eventListenerCallBack(), useCapture)
// type: Use to refer to the type of event.
// listener: Function we want to call when the event of the specified type occurs.
// userCapture: Boolean value. Boolean value indicates event phase. By Default useCapture is false. It means it is in the bubbling phase.
//Change it to true to convert it to event capturing.

/**
 * ! Memoization?
 */
//Memoization is a technique for speeding up applications by caching the results of expensive function calls and returning them when the same inputs are used again.
// Let us try to understand this by breaking the definition into small parts.
/**
 * * Expensive Function Calls:
 */
//  Time and memory are the two most important resources in computer applications. As a result, an expensive function call is one that consumes large amounts of these two resources due to extensive calculation during execution.
/**
 * * Cache:
 */
//  A cache is just a temporary data store that stores data in order to serve future requests for that data more quickly.

/**
 * ! Importance of Memoization
 */
//  When a function is given in input, it performs the necessary computation and saves the result in a cache before returning the value. If the same input is received again in the future, it will not be necessary to repeat the process. It would simply return the cached answer from the memory. This will result in a large reduction in a code’s execution time.

/**
 * ! Examples
 */
// let sum = 0;
// let call = (n) => {
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// };
// const memoize = (fun) => {
//   let cache = {};
//   return function (...args) {
//     let n = args[0];
//     if (n in cache) {
//       console.log("cache");
//       return cache[n];
//     } else {
//       console.log("calculating");
//       let result = fun(n);
//       cache[n] = result;
//       return result;
//     }
//   };
// };
// console.time();
// let res = memoize(call);
// console.log(res(5));
// console.timeEnd();
// console.time();
// console.log(res(5));
// console.timeEnd();