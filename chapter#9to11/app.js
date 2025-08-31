// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”


// let city = prompt("Enter your city").trim(); // remove extra spaces

// if(city === "Karachi"){
//     alert("Welcome to city of lights");
// }else if (city  === "Peshawar"){
//     alert("Welcome to Pathan city")
// }else{
//     alert("out of Pakistan")
// }




// 2. Write a program to take “gender” as input from user. If the 
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am. 


// let mama = prompt("Enter your Gender")

// if(mama === "Male"){
//     alert("Good Morning Sir")
// }else if(mama === "Female"){
//     alert("Good Morning Ma’am")
// }else{
//     alert("error")
// }




// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:


// let traffic1 = prompt("Enter your First Color")
// let traffic2 = prompt("Enter your Second Color")
// let traffic3 = prompt("Enter your Third Color")


// document.writeln("<table border='1' cellpadding='10'>")
// if (traffic1 === "Red"){
//     document.writeln(`<tr> <td>Red Colore</td> <td>Must Stop</td> </tr>`)
// }
// document.writeln("</table>")




// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table: 
// Signal color  
// Red 
// Yellow 
// Green 
// Message 
// Must Stop 
// Ready to move 
// Move now 


// let signal = prompt("Enter Traffic Signal Colore")

// signal = signal.toLowerCase()

// if(signal === "red"){
//     document.writeln("Must stop😁")
// }else if (signal === "yellow"){
//     document.writeln("Ready to move😍")
// }else if (signal === "green"){
//     document.writeln("Move now😜")
// }else{
//     alert("Please enter your signal colore🙄")
// }




// 4. Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”


// let fuel = parseFloat(prompt("Enter your remaining fuel in your car (in liters):"))

// if(fuel < 0.25){
//     alert("please refill the fuel in your car")
// }else{
//     alert("fuel is enough for now")
// }




// 5. Run this script, & check whether alert message would be 
// displayed or not. Record the outputs. 


// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }
// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 
// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// } 
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
// if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// } 
// if("car" < "cat"){ 
// alert("car is smaller than cat"); 
// }




// 6. Write a program to take input the marks obtained in three 
// subjects & total marks. Compute & show the resulting 
// percentage on your page. Take percentage & compute 
// grade as per following table: 
// Show the total marks, marks obtained, percentage, grade & 
// remarks like: 


// let subject1 = parseFloat(prompt("Enter marks of subject 1"))
// let subject2 = parseFloat(prompt("Enter marks of subject 2"))
// let subject3 = parseFloat(prompt("Enter marks of subject 3"))

// let totalMarks = 300
// let obtainedMarks = subject1 + subject2 + subject3;
// let percentage = (obtainedMarks / totalMarks) * 100

// let grade , remarks

// if(percentage >= 95){
//     grade = "A-one+"
//     remarks = "Excellent👼";
// }else if (percentage >=80){
//     grade = "A-one";
//     remarks = "Excellent";
// }else if(percentage >=70){
//     grade = "A";
//     remarks = "Good"
// }else if(percentage >=60){
//     grade = "B";
//     remarks = "You need to improve"
// }else{
//     grade = "Fail"
//     remarks = "Sorry"
// }

// document.writeln(`<h2>Mark sheet</h2>`)
// document.writeln(`<table border='1' cellpadding='10'>`)
// document.writeln(`<tr> <td>Total marks</td> <td>${totalMarks}</td> </tr>`)
// document.writeln(`<tr> <td>Marks obtained</td> <td>${obtainedMarks}</td> </tr>`)
// document.writeln(`<tr> <td>Percentage</td> <td>${percentage.toFixed(2)}</td> </tr>`)
// document.writeln(`<tr> <td>Grade</td> <td>${grade}</td> </tr>`)
// document.writeln(`<tr> <td>Remarks</td> <td>${remarks}</td> </tr>`)
// document.writeln(`</table>`)




// 7. Guess game: 
// Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct 
// answer”. 
// b. If the guessed number +1 is the secret number, show 
// “Close enough to the correct answer”. 


// let secretNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10

// // Prompt user for a guess
// let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if(userGuess === secretNumber){
//     alert("Bingo! Correct answer")
// }else if (userGuess + 1 === secretNumber){
//     alert("Close enough to the correct answer")
// }else{
//     alert(`sorry! The correct number was ${secretNumber}`)
// }




// 8. Write a program to check whether the given number is 
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.


// let number = parseFloat(prompt("Enter a number to check if it is divisible by 3"))

// if(number % 3 === 0){
//     alert(`${number} is divisible by 3`)
// }else{
//     alert(`${number} is not divisible by 3`)
// }




// 9. Write a program that checks whether the given input is an 
// even number or an odd number. 


// let num = prompt("Enter your number")

// if (num % 2 ===0){
//     alert("This is even number")
// }else{
//     alert("This is odd number")
// }




// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.”


// let temp = prompt("Enter your city temperature")

// if (temp > 40){
//     alert("It is too hot outside.")
// }else if (temp > 30){
//     alert("The Weather today is Normal.")
// }else if (temp > 20){
//     alert("Today's Weather is cool.")
// }else if (temp > 10){
//     alert("OMG! Today's Weather is so Cool.")
// }else{
//     alert("It's very cold outside.")
// }




// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user. 


// let num1 = +prompt("Enter your first number")
// let num2 = +prompt("Enter your second number")
// let num3 = prompt("Enter your operation (+, -, *, /, %)")

// let result;

// if(num3 === "+"){
//     result = num1 + num2
// }else if (num3 === "-"){
//     result = num1 - num2
// }else if (num3 === "*"){
//     result = num1 * num2
// }else if (num3 === "/"){
//     result = num1 / num2
// }else if (num3 === "%"){
//     result = num1 % num2
// }else{
//     alert("Invalid operation")
// }

// alert(`The result is ${result}`)












