// 1. Write a function that displays current date & time in your 
// browser. 


// function currentDate(){
//     let now = new Date()

//     document.getElementById("currentDate").innerHTML = now;
// }
// currentDate()




// 2. Write a function that takes first & last name and then it 
// greets the user using his full name. 


// function userGreet(firstName , lastName){
//     let fullName = firstName + " " + lastName;

//     document.getElementById("output").innerHTML = "Hello " + fullName + "!"
// }
// let name1 = prompt("Enter your first name")
// let name2 = prompt("Enter your last name")
// userGreet(name1 , name2)



// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers. 


// function addTwoNumbers(){
//     let num1 = +prompt("Enter your first number");
//     let num2 = +prompt("Enter your last number");
    
//     let sum = num1 + num2;

//     return sum;
// }
// let total = addTwoNumbers();
// document.getElementById("result").innerHTML = "The result is: " + total




// 4. Calculator:  
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser. 


// function calculator(num1, num2, operator){
//     let result;

//     if(operator === "+"){
//         result = num1 + num2;
//     }else if(operator === "-"){
//         result = num1 - num2;
//     }else if(operator === "*"){
//         result = num1 * num2;
//     }else if(operator === "/"){
//         result = num1 / num2;
//     }
//     return result;
// }
// let op1 = +prompt("Enter your fist number");
// let op2 = +prompt("Enter your last number");
// let op3 = prompt("Enter one of this (+, -, *, /)");

// let output = calculator(op1, op2, op3);
// document.getElementById("calcResult").innerHTML = "Result is: " + output




// 5. Write a function that squares its argument. 


// function square(num){
//     return num * num
// }

// let number = +prompt("Enter your number")
// let result = square(number)

// document.writeln(result)




// 6. Write a function that computes factorial of a number.


// function factorial(num1){
//     let result = 1;
//     for(let i = 1; i <= num1; i++){
//         result = result * i
//     }
//     return result;
// }

// console.log(factorial(3));




// 7. Write a function that take start and end number as inputs 
// & display counting in your browser. 


// function count(start , end){
//     for(let i = start; i <= end; i++){
//         document.writeln(`${i} <br />`)
//     }
// }

// count(2 , 15)




// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle.  
// Hypotenuse2 = Base2 + Perpendicular2 
// Take base and perpendicular as inputs. 
// Outer function : calculateHypotenuse() 
// Inner function: calculateSquare()


// function calculateHypotenuse(base , perpendicular){

//     function square(num){
//         return num * num
//     }

//     let baseSquare = square(base)
//     let perpendicularSquare = square(perpendicular)

//     let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare)

//     return hypotenuse
// }

// let result = calculateHypotenuse(3 , 4)
// document.writeln(result)




// 9. Write a function that calculates the area of a rectangle. 
// A = width * height 
// Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables


// function calculate(width , height){
//     let result = width * height
//     return result
// }

// let calcResult = calculate(2 , 5)
// document.writeln(`Area of rectangle: ${calcResult}`)




// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?   
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam. 


// function isPalindrome(str){
//     str = str.toLowerCase()
    
//     let reversed = str.split('').reverse().join('')

//     if(str === reversed){
//         return str + " is a Palindrome.";
//     }else{
//         return str + " is not a Palindrome.";
//     }
// }

// console.log(isPalindrome("hello"));
// console.log(isPalindrome("madam"));




// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT : 'The Quick Brown Fox' 


// function capitalizeWords(str){
//     let words = str.split(" ")

//     for (var i = 0; i < words.length; i++){
//         let word = words[i];
//         words[i] = word.charAt(0).toUpperCase() + word.slice(1);
//     }
//     return words.join(" ")
// }
// let result = capitalizeWords("heelo how can i help you sir")
// document.write(result)



// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string.  
// EXAMPLE STRING : 'Web Development Tutorial'  
// EXPECTED OUTPUT : 'Development'


// function findLongestWord(str) {
//     let words = str.split(" ")
//     let longest = "";

//     for(let i = 0; i < words.length; i++){
//         if(words[i].length > longest.length){
//             longest = words[i]
//         }
//     }
//     return longest;
// }

// let result = findLongestWord("hello hasssaan kaise hon ap")
// document.write(result)




// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


// function letterCount(str, letter){
//     var count = 0;

//     for(var i = 0; i < str.length; i++){
//         if(str[i] === letter){
//             count++
//         }
//     }
//     return count;
// } 
// var result = letterCount("JSResourceS.com", "o")
// console.log(result);



