## JavaScript Engine: All you need to know

### What is JavaScript Engine?

- JavaScript is not understandable by computer but the only browser understands JavaScript. So, we need a program to convert our JavaScript program into computer-understandable language. A JavaScript engine is a computer program that executes JavaScript code and converts it into computer understandable language.
- The JavaScript Engine is an open-source computer program whose responsibility is to execute/run JavaScript. There are a lot of steps involved in executing the JavaScript Engine, but essentially executing JavaScript code is what an engine does. All modern browsers have their own version of the JavaScript Engine. But Google's V8 Engine is the most popular JavaScript Engine. 
- An elementary JavaScript engine includes a baseline compiler whose job is to compile JavaScript source code into an intermediate representation (IR) called the bytecode and feeds this bytecode to the interpreter. The interpreter takes this bytecode and converts it to the machine code, which is ultimately run on the machine’s hardware (CPU).
- ECMAScript Standards are being followed by the JavaScript engines to execute the code on the browser. The role of these standards is to give a definition and specification to JavaScript engines on how they should work and what features they should have.

### Here is a list of JavaScript Engines for major Internet browsers:
- `V8` JavaScript Engine developed by Google for Chrome
- `SpiderMonkey` The JavaScript Engine used by Mozilla Firefox
- `JavaScriptCore`  Developed by Apple for Safari
- `Rhino`  Managed by Mozilla Foundation for Firefox
- `Chakra`  A JavaScript Engine for Microsoft Edge
- `JerryScript`  A JavaScript Engine employed for the Internet of Things (IoT).

### What are the components of JavaScript Engine?

![626f6337e11f082ebf1e4d70_kinse98CDmvflgPshHgOomUovkd1DbAyoRkyhbGwP7pJKAGcslZjRYMmuoXqnC9A2L67alEIoxsL_R7z4EC7QzXFjrHq3ScHKgadxaE0ODBTAFh_b6fmcS6wik9PCMfC4LtWy_WL](https://user-images.githubusercontent.com/100460788/233707130-5b34901f-be37-4673-a142-3a3cc901e645.png)

### The engine consists of two main elements:

`Memory Heap`

Heap is a large unstructured data structure that stores all the dynamic data like function definitions, objects, arrays, etc. The memory heap is where the memory allocation happens, it is a location in memory where memory may be allocated at random access. Individual data elements distributed on the heap are typically released in ways that are asynchronous from one another. The memory occupied in the heap continues to exist even after JavaScript code execution has been completed and is later removed by the JavaScript Garbage Collector if needed.

`Call Stack`

The Call stack is a data structure that functions on the Last In First Out  (LIFO) principle. The call stack stores the execution context or code for each function. It is defined as an object which stores local variables, functions, and objects of the codes and how would they appear on the screen. Primitive values like int, bool, etc are stored inside the call stack. While function definitions and objects are not stored inside the call stack, they are stored inside the memory heap. The call stack just has the reference or memory address of where these function definitions and objects are stored and would appear on the search engine.

### How does the JavaScript engine work?
![javascript_journey](https://user-images.githubusercontent.com/100460788/233707653-5cb6c00e-d49d-4803-9f94-5cec7aaa49f1.png)

- The JavaScript engine works on the JavaScript source code and puts it and then executes the compilation to binary instructions (machine code) that are easily understandable by the CPU. A JavaScript engine generally consists of a baseline compiler that works on the compilation of the code in the form of intermediate representation (IR) /byte code and then passes the byte code to the interpreter. 

- Later, the interpreter takes this byte code and makes the conversion into machine code, which will further run this code on the hardware of the machine to generate the results. The assignment of a baseline compiler is to perform the compilation of the code as fast as possible and to generate less-optimized byte codes. 

- A JavaScript engine can make an intuition about the data types of the variables and perform the generation of much better code that increases the effectiveness of the system and user experience at large.

- The JavaScript engine can also work on gathering, and profiling data on the execution of the code and analyzing the speed of the code. Codes that run slow or take time to process are commonly known as "Hot" codes as they get burned in the CPU. System designers have the option to further optimize and replace machine code that has already been optimized to avoid burns.

### What are different JavaScript engines?

`1. V8`

It is a JavaScript engine developed by the Chromium Project for Google Chrome and Chromium web browsers which can run standalone or be embedded into any C++ application. V8 uses its own parser and generates an abstract syntax tree, used for generating bytecode by Ignition using the internal V8 bytecode format. V8 provides an edge as it allows JavaScript to run much faster, which improves users' experience of the web and the overall functionality of the system. 

`2. Chakra`

Chakra is a JavaScript engine developed by Microsoft used for Microsoft Internet Explorer. It is proprietary software with distinctive features. Chakra can JIT compile scripts on a separate CPU core parallel to the web browser. Firstly, Chakra Core reads through the Javascript code syntax and parses it to generate its AST. After the AST is generated, the code is passed to the byte code generator to profile the byte codes. Chakra works a bit differently from V8, as V8 has a decision process that decides whether a piece of code should be profiled and optimized or should be turned into byte code.

`3. Spider Monkey`

SpiderMonkey is the first JavaScript engine, written by Brendan Eich at Netscape Communications, released as open-source, and is currently maintained and used by the Mozilla Foundation. It contains a JavaScript compiler and interpreter along with several service programs. It is written in C++, Rust and JavaScript can be embedded into C++ and Rust projects and run as a stand-alone shell.

### For more details - [Docs](https://www.geeksforgeeks.org/introduction-to-javascript-engines/)
