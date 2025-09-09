// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name. 


// let firstName = prompt("Enter your first name")
// let lastName = prompt("Enter your last name")

// let mergeName = firstName + " " + lastName

// document.writeln(`Hello ${mergeName}! Welcome😊`)




// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser 


// let fav = prompt("Enter your Favorite mobile Name")

// document.writeln(`My favorite phone is: ${fav} <br>`)

// document.writeln(`Length of string: ${fav.length}`)




// 3. Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser . 


// let arr = "Pakistani"

// let index = arr.indexOf("n")

// document.writeln(`String: ${arr}<br>`)
// document.writeln(`index of 'n': ${index}`)




// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser. 


// let string = "Hello World"
// document.writeln(`String: ${string} <br>`)

// let length = string.lastIndexOf("l")
// document.writeln(`Last index of 'l': ${length}`)




// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser. 


// let word = "Pakistani"
// document.writeln(`String: Pakistani<br>`)

// let charac = word.indexOf("i")
// document.writeln(`character at index 'i': ${charac}`)




// 6. Repeat Q1 using string concat() method. 


// let firstName = prompt("Enter your first name")
// let lastName = prompt("Enter your last name")

// let fullName = firstName.concat(" ", lastName)

// document.writeln(`Hello ${fullName}! Welcome`)




// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser. 


// let word1 = "Hyderabad"
// let replace = word1.replace("Hyder" , "Islam")

// document.writeln(`City: Hyderabad <br>`)
// document.writeln(`After replacement: ${replace}`)




// 8. Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”; 


// var message = "Ali and Sami are best friends. They play cricket and football together."; 
// let replace1 = message.replaceAll("and", "&")

// document.writeln(`message: ${message}<br><br><br>`)
// document.writeln(`After replacement: ${replace1}`)




// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser. 


// let num2 = "472"
// let numb = Number(num2)


// document.writeln(`value: ${num2}<br>`)
// document.writeln(`Type: String<br>`)
// document.writeln(`value: ${num2}<br>`)
// document.writeln(`Type: Number<br>`)




// 10. Write a program that takes user input. Convert and 
// show the input in capital letters. 


// let userInput = prompt("Enter your favourite food")
// let user = userInput.toUpperCase()

// document.writeln(`User input: ${userInput} <br>`);
// document.writeln(`Upper Case: ${user}`);




// 11. Write a program that takes user input. Convert and 
// show the input in title case. 


// let userInput1 = prompt("Enter your favourite cookie")

// function toTitleCase(str) {
//     return str
//         .toLowerCase()
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");
// }

// let titleCase = toTitleCase(userInput1)


// document.writeln(`User input: ${userInput1}<br>`)
// document.writeln(`Title Case: ${titleCase}`)




// 12. Write a program that converts the variable num to 
// string. 
// var num = 35.36 ; 
// Remove the dot to display “3536” display in your browser.


// let num = 36.45
// let str = num.toString()
// let sti = str.replace(".", "")

// document.writeln(`Number: ${num}<br />`)
// document.writeln(`Result: ${sti}<br />`)




// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ . 
// Note: 
// ASCII code of ! is 33 
// ASCII code of , is 44 
// ASCII code of . is 46 
// ASCII code of @ is 64 


// // Take user input
// let username = prompt("Enter your username:");

// // Flag to track invalid username
// let isValid = true;

// // Check each character using charCodeAt
// for (let i = 0; i < username.length; i++) {
//     let charCode = username.charCodeAt(i);

//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         isValid = false;
//         break;
//     }
// }

// // Show result
// if (!isValid) {
//     alert("Please enter a valid username (no special symbols @ . , ! allowed).");
// } else {
//     document.write("Valid Username: " + username);
// }




// 14. You have an array 
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not. 
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:


// let A = ["cake", "apple pie", "cookie", "chips", "patties"] 

// let userInput2 = prompt("Welcome to ABC bakery. What do you want to order sir/mam ?")

// let searchItem = userInput2.toLowerCase()

// if(A.includes(searchItem)){
//     alert(`${userInput2} is Available at index ${A.indexOf(searchItem)} in our Bakery.`)
// }else{
//     alert(`We are sorry. ${userInput2} is not available in our Bakery`)
// }




// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long 
// If the password does not meet above requirements, 
// prompt the user to enter a valid password. 
// For character codes of a-z, A-Z & 0-9, refer to ASCII 
// table at the end of this document. 


// function checkPassword(){
//     let password = prompt("Enter your valid Password")

//     if(password.length < 6){
//         alert("It must at least 6 characters long")
//         return;
//     }

//     let firstChar = password.charAt(0)
//     if(!isNaN(firstChar)){
//         alert("It should not start with a number")
//         return;
//     }

//     let hasAlphabet = /[a-zA-Z]/.test(password);
//     let hasNumber = /[0-9]/.test(password);

//     if(!(hasAlphabet && hasNumber)){
//         alert("It should contain alphabets and numbers")
//         return;
//     }

//     alert("Password is Valid!")
// }

// checkPassword()




// 16. Write a program to convert the following string to an 
// array using string split method. 
// var university = “University of Karachi”; 
// Display the elements of array in your browser. 


// var university = "University of Karachi"; 

// let arr = university.split("")

// for(let i = 0; i < arr.length; i++){
//     document.writeln(`${arr[i]}<br />`)
// }




// 17. Write a program to display the last character of a user 
// input.


// let input = prompt("Enter your favourite city");

// let lastChar = input.charAt(input.length - 1);

// document.writeln(`user input: ${input} <br>`)
// document.writeln(`Last Character of input: ${lastChar}`)




// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string. 


// let str = "The quick brown fox jumps over the lazy dog"
// let lowerStr = str.toLowerCase()

// let count = lowerStr.split("the").length - 1;

// document.writeln(`Text: ${str} <br>`)
// document.writeln(`There are ${count} occurrences(s) of word 'the'`)
