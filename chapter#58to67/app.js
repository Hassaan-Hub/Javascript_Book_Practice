// 1. Consider you have following code snippet:
//  (Copy it in your HTML file)
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.



// var mainContent = document.getElementById("main-content")

// var children = mainContent.children;

// for (let i = 0; i < children.length; i++) {
//     document.writeln(children[i].innerHTML + "<br>")
// }

// var render = document.getElementsByClassName("render")
// document.write("<h3>All elements with class render:</h3>");

// for (let i = 0; i < render.length; i++) {
//     document.write(render[i].innerHTML + "<br>")
// }

// document.getElementById("first-name").value = "Hassaan"
// document.getElementById("last-name").value = "Farid"
// document.getElementById("email").value = "hassaangta423@gamil.com"




// 2. use HTML code of question 1 and show the result on browser.


// // i. What is node type of element having id “form-content”.
// var formContent = document.getElementById("form-content")
// document.writeln(`i) Node type of form-content: ${formContent.nodeType} <br><br>`)

// // ii. Show node type of element having id “lastName” and its child node.
// var lastName = document.getElementById("lastName")
// document.writeln(`ii) Node type of lastName: ${lastName.nodeType} <br>`)
// document.writeln(`child node type of lastName: ${lastName.firstChild.nodeType} <br><br>`)

// // iii. Update child node of element having id “lastName”.
// lastName.firstChild.nodeValue = "Last name: hassaan";
// document.writeln(`iii) update lastName: ${lastName.innerHTML} <br><br>`)

// // iv. Get First and last child of id “main-content”.
// var mainContent = document.getElementById("main-content")
// document.writeln(`iv) first child of main content: ${mainContent.firstElementChild.innerHTML} <br>`)
// document.writeln(`last childe of main content: ${mainContent.lastElementChild.innerHTML} <br><br>`)

// // v. Get next and previous siblings of id “lastName”.
// var lastName = document.getElementById("lastName")
// document.write(`Previous sibling of lastName: ${lastName.previousElementSibling.innerHTML} <br>`)
// document.writeln(`Next sibling of lastName: ${lastName.nextElementSibling.innerHTML} <br><br>`)

// // vi. Get parent node and node type of element having id “email”
// var email = document.getElementById("email")
// document.writeln(`Parent node of email: ${email.parentNode.nodeName} <br>`)
// document.writeln(`Node type of email: ${email.nodeType}`)