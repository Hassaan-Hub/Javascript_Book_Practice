// 1. Write a program that takes a positive integer from user & 
// display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 


// let number = prompt("Enter your number")

// document.write(`Number: ${number}<br>`)

// document.write(`Round off value: ${Math.round(number)}<br>`)

// document.write(`floor value off: ${Math.floor(number)}<br>`)

// document.write(`ceil value off: ${Math.ceil(number)}`)




// 2. Write a program that takes a negative floating point 
// number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 


// let num = prompt("Enter your number")


// document.writeln(`Number: ${num}<br>`)

// document.writeln(`round off value of the: ${Math.round(num)}<br>`)

// document.writeln(`floor value of the: ${Math.floor(num)}<br>`)

// document.writeln(`ceil value of the: ${Math.ceil(num)}`)




// 3. Write a program that displays the absolute value of a 
// number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 


// let num1 = prompt("Enter any number to find absolute value")

// let absValue = Math.abs(num1)

// document.writeln("The absolute value of " + num1 + " is " + absValue)




// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.: 


// let num = prompt("Enter your num")
// let dic = Math.floor(Math.random() * num) + 1

// alert(dic)




// 5. Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your 
// browser 


// let game = prompt("Enter your Twss")

// let random = Math.floor(Math.random() * 2);

// if (random === 1){
//     alert(`Heads`)
// }else{
//     alert("Tails")
// }




// 6. Write a program that shows a random number between 1 
// and 100 in your browser. 


// let rand = Math.floor(Math.random() * 100) + 1

// document.writeln(`Random number between 1 to 100: ${rand}`)




// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms 


// let wei = prompt("Enter your Weight")

// let weight = parseFloat(wei)

// document.writeln(`The weight of user is ${weight} Kilograms`)



// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.


// let secNumb = Math.floor(Math.random() * 10) + 1

// let userGuess = parseFloat(prompt("Enter a number between 1 to 10"))

// if(secNumb === userGuess){
//     alert(`Mubarak ho apne sahi number guess kia hai apka number ${secNumb} hai`)
// }else{
//     alert(`sorry! galat guess kia apne or try karo`)
// }























