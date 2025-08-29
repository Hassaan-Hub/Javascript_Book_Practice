// 1. Write a program to take a number in a variable, do the 
// required arithmetic to display the following result in your 
// browser: 


// document.writeln(`<b>Result:</b> <br>`)

// var a = 10
// document.writeln(`The value of a is: ${a} <br><br><hr><br>`)
// document.writeln(`The value of ++a is: ${++a} <br>`)
// document.writeln(`Now the value of a is: ${a} <br> <br>`)
// document.writeln(`The value of a++ is: ${a++} <br>`)
// document.writeln(`Now the value of a is: ${a} <br> <br>`)
// document.writeln(`The value of --a is: ${--a} <br>`)
// document.writeln(`Now the value of a is: ${a} <br> <br>`)
// document.writeln(`The value of a-- is: ${a--} <br>`)
// document.writeln(`Now the value of a is: ${a}`)




// 2. What will be the output in variables a, b & result after 
// execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;


// var a = 2 , b = 1;

// document.writeln(`a is: ${a} <br>`)
// document.writeln(`b is: ${b} <br>`)

// var result = --a - --b + ++b + b--;
// document.writeln(`result is: ${result}`)




// 3. Write a program that takes input a name from user & 
// greet the user.


// var greet = prompt("Enter your Name")

// document.writeln(`Hello ${greet}! Welcome to The Hassaan-Hub😎`)




// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.


// // Take input from user
// var prom = prompt("Enter your Table Number" , 5)

// // Convert input to number
// prom = Number(prom)


// // Display the table in browser
// document.writeln(`<h2>Multiplication of ${prom} is</h2>`)

// for (var i = 1; i <= 10; i++){
//     document.writeln(`${prom} X ${i} = ${prom * [i]} <br>`)
// }




// 6. Take 
// a) Take three subjects name from user and store them in 3 
// different variables. 
// b) Total marks for each subject is 100, store it in another 
// variable. 
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables. 
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)


var subject1 = prompt("Enter your first subject")
var subject2 = prompt("Enter your second subject")
var subject3 = prompt("Enter your third subject")


var totalMarksPerSubject = 100;

var obtained1 = +prompt("Enter your obtained Marks for " + subject1 + ":")
var obtained2 = +prompt("Enter your obtained Marks for " + subject2 + ":")
var obtained3 = +prompt("Enter your obtained Marks for " + subject3 + ":")

var totalObtained = obtained1 + obtained2 + obtained3
var totalMarks = totalMarksPerSubject * 3
var percentage = (totalObtained / totalMarks) * 100


document.writeln(`<h2>Mark Sheet</h2>`)
document.writeln(`<table border= '1' cellpadding='10'>`)
document.writeln(`<tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>percentage</th> </tr>`)
document.writeln(`<tr> <td>${subject1}</td> <td>${totalMarksPerSubject}</td> <td>${obtained1}</td> <td>${(obtained1 / totalMarksPerSubject) * 100}%</td> </tr>`)
document.writeln(`<tr> <td>${subject2}</td> <td>${totalMarksPerSubject}</td> <td>${obtained2}</td> <td>${(obtained2 / totalMarksPerSubject) * 100}%</td> </tr>`)
document.writeln(`<tr> <td>${subject3}</td> <td>${totalMarksPerSubject}</td> <td>${obtained3}</td> <td>${(obtained3 / totalMarksPerSubject) * 100}%</td> </tr>`)
document.writeln(`<tr> <th>Total</th> <th>${totalMarks}</th> <th>${totalObtained}</th> <th>${percentage.toFixed(2)}%</th> </tr>`)
document.writeln(`</table>`)