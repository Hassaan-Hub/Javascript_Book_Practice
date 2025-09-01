// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).


// let char = prompt("Enter a character");

// // Character ka ASCII code nikalna
// let ascii = char.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//     alert("The input is a number")
// } else if (ascii >= 65 && ascii <= 90) {
//     alert("The input is an Uppercase Letter.");
// } else if (ascii >= 97 && ascii <= 122) {
//     alert("The input is an LowerCase Letter.")
// } else {
//     alert("Input is neither a number nor an alphabet")
// }




// 2. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.


// let int1 = +prompt("Enter your first number")
// let int2 = +prompt("Enter your second number")

// if (int1 > int2) {
//     alert("The larger number is " + int1)
// } else if (int2 > int1){
//     alert("The larger number is " + int2)
// }else{
//     alert(int1 + " and " + int2 + " are equal number")
// }




// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero. 


// let input = +prompt("Enter a number")

// if (input > 0){
//     alert("The number is positive")
// }else if (input < 0){
//     alert("The number is nagative")
// }else{
//     alert("The number is Zero")
// }




// 4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise


// let char = prompt("Enter a alphabet character").toLowerCase()

// if (char.length === 1){
//     if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//         alert("True")
//     }else{
//         alert("False")
//     }
// }else{
//     alert("please enter one character")
// }




// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. 
// Check if user has entered password. If not, then 
// give message “ Please enter your password” 
// ii. 
// Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.


// let correctPassword = "hassaan123"
// let userPassword = prompt("Enter your password")

// if (!userPassword){
//     alert("please enter your password")
// }else if (userPassword === correctPassword){
//     alert("Correct! The password you entered matches the original password")
// }else{
//     alert("Incorrect Password")
// }




// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// }


// let greeting;
// let hour = 13;

// if(hour < 18){
//     greeting = "Good day"
// }else{
//     greeting = "Good evening"
// }

// document.writeln(greeting)




// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements


let time = parseFloat(prompt("Enter time in 24 hours clock format like: 1900 = 7pm"))

if (time >= 0 && time < 1200){
    alert("Good Morning")
}else if (time >= 1200 && time < 1700){
    alert("Good Afternoon")
}else if(time >= 1700 && time < 2100){
    alert("Good Evening")
}else if (time >= 2100 && time <= 2359){
    alert("Good Night")
}else{
    alert("Please enter a valid time")
}



















