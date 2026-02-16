// 1. Consider you have following code snippet:
//  (Copy it in your HTML file)
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.



var mainContent = document.getElementById("main-content")

var children = mainContent.children;

for (let i = 0; i < children.length; i++) {
    document.writeln(children[i].innerHTML + "<br>")
}

var render = document.getElementsByClassName("render")
document.write("<h3>All elements with class render:</h3>");

for (let i = 0; i < render.length; i++) {
    document.write(render[i].innerHTML + "<br>")
}

document.getElementById("first-name").value = "Hassaan"
document.getElementById("last-name").value = "Farid"
document.getElementById("email").value = "hassaangta423@gamil.com"
