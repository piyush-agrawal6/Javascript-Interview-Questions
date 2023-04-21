For better understanding - https://www.geeksforgeeks.org/introduction-to-javascript-engines/

JavaScript is not understandable by computer but the only browser understands JavaScript. So, we need a program to convert our JavaScript program into computer-understandable language. A JavaScript engine is a computer program that executes JavaScript code and converts it into computer understandable language.

// List of JavaScript Engines:
Browser	               Name of Javascript Engine
Google Chrome	               V8
Edge (Internet Explorer)	 Chakra
Mozilla Firefox	        Spider Monkey
Safari 	               Javascript Core Webkit

// Let’s understand each of them.
1. V8: V8 is a JavaScript engine developed by the Chromium Project for Google Chrome and Chromium web browsers. It is a JavaScript engine that can run standalone, or be embedded into any C++ application. Using its own parser, it generates an abstract syntax tree. Then, Ignition generates bytecode from this syntax tree using the internal V8 bytecode format. Bytecode is compiled into machine code by TurboFan. It also handles memory allocation for objects, and garbage collects objects it no longer needs. Optimization techniques such as elision of expensive runtime properties, and inline caching. The garbage collector is a generational incremental collector.

V8 provides an edge as it allows JavaScript to run much faster, which improves users’ experience of the web, paves the way for the development of web applications, and spurs rapid growth of server-side JavaScript through projects like Node.js.

2. Chakra: Chakra is a JScript engine developed by Microsoft. It is proprietary software. It is used in the Internet Explorer web browser. A distinctive feature of the engine is that it JIT compiles scripts on a separate CPU core, parallel to the web browser.

3. Spider Monkey: SpiderMonkey is the first JavaScript engine, written by Brendan Eich at Netscape Communications, later released as open-source and currently maintained by the Mozilla Foundation. It is still used in the Firefox web browser.

4. Webkit: WebKit is developed by Apple and  used in its Safari web browser, as well as all iOS web browsers. It is  used by the BlackBerry Browser, PlayStation consoles beginning from the PS3, the Tizen mobile operating systems, and a browser included with the Amazon Kindle e-book reader. WebKit’s C++ application programming interface (API) provides a set of classes to display Web content in windows and implements browser features such as following links when clicked by the user, managing a back-forward list, and managing a history of pages recently visited.