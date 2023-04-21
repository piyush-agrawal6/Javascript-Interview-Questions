#### What is Javascript?

JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language which is also known as the scripting language for webpages. It is well-known for the development of web pages, and many non-browser environments also use it. JavaScript is a weakly typed language(dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript is both an imperative and declarative type of language. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements. 

- JavaScript, created by Brendan Eich in 1995, is one of the most widely used web development languages. 
- It was designed to build dynamic web pages at first. A script is a JS program that may be added to the HTML of any web page. When the page loads, these scripts execute automatically.
- A language that was originally designed to build dynamic web pages may now be run on the server and on almost any device that has the JavaScript Engine installed.
- After HTML and CSS, JavaScript is the third biggest web technology. 
- JavaScript is a scripting language that may be used to construct online and mobile apps, web servers, games, and more. 
- JavaScript is an object-oriented programming language that is used to generate websites and applications. It was created with the intention of being used in a browser. 
-Even today, the server-side version of JavaScript known as Node.js may be used to create online and mobile apps, real-time applications, online streaming applications, and videogames. Javascript frameworks, often known as inbuilt libraries, may be used to construct desktop and mobile programs. 

#### JavaScript is Used for

- `Creating Interactive Websites`: JavaScript is used to make web pages dynamic and interactive. It means using JavaScript, we can change the web page content and styles dynamically.
- `Building Applications`: JavaScript is used to make web and mobile applications. To build web and mobile apps, we can use the most popular JavaScript frameworks like – ReactJS, React Native, Node.js etc.
- `Web Servers`: We can make robust server applications using JavaScript. To be precise we use JavaScript frameworks like Node.js and Express.js to build these servers.
- `Game Development`: JavaSCript can be used to design Browser games. In JavaScript, lots of game engines are available that provide frameworks for building games.

#### Advantages of JavaScript

- `Less server interaction` − You can validate user input before sending the page off to the server. This saves server traffic, which means less load on your server.
- `Immediate feedback to the visitors` − They don't have to wait for a page reload to see if they have forgotten to enter something.
- `Increased interactivity` − You can create interfaces that react when the user hovers over them with a mouse or activates them via the keyboard.
- `Richer interfaces` − You can use JavaScript to include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors.

#### Limitations of JavaScript

- `Security risks`: JavaScript can be used to fetch data using AJAX or by manipulating tags that load data such as <img>, <object>, <script>. These attacks are called cross-site script attacks. They inject JS that is not part of the site into the visitor’s browser thus fetching the details. 
- `Performance`: JavaScript does not provide the same level of performance as offered by many traditional languages as a complex program written in JavaScript would be comparatively slow. But as JavaScript is used to perform simple tasks in a browser, so performance is not considered a big restriction in its use.
- `Complexity`: To master a scripting language, programmers must have a thorough knowledge of all the programming concepts, core language objects, and client and server-side objects otherwise it would be difficult for them to write advanced scripts using JavaScript.
- `Weak error handling and type checking facilities`: It is a weakly typed language as there is no need to specify the data type of the variable. So wrong type checking is not performed by compile.

---
  
#### JavaScript can be added to your HTML file in two ways

- Internal JavaScript
- Extern
 
#### Internal JavaScript: We can add JS code directly to our HTML file by writing the code inside the `<script>` & `</script>`. The <script> tag can either be placed inside the `<head>` or the `<body>` tag according to the requirement.

#### Example: It is the basic example of using JavaScript code inside of HTML code

```ts
<!DOCTYPE html>
<html lang="en">
 
<head>
    <title>
        Basic Example to Describe JavaScript
    </title>
</head>
  
<body>
    <script>
        console.log("Hey, Whats up?");
    </script>
</body>
 
</html>
```
  
`External JavaScript` : We can create the file with a .js extension and paste the JS code inside of it. After creating the file, add this file in <script src=”file_name.js”> tag, and this <sctipt> can import inside <head> or <body> tag of the HTML file.

#### Example: It is the basic example of using JavaScript javascript code which is written in a different file. By importing that .js file in the head section.
  
```ts
<!DOCTYPE html>
<html lang="en">
 
<head>
    <title>
        Basic Example to Describe JavaScript
    </title>
    <script src="main.js"></script>
</head>
 
<body>
</body>
 
</html>
```
