// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser. 


let num1 = prompt("pehla number lekho")
let num2 = prompt("dosra number lekho")

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let result = num1 + num2;

document.write("<p>" + num1 + " aur " + num2 + " ka jama hai: " + result + "</p>")