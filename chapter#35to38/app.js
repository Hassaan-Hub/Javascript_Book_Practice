// 1. Write a function that displays current date & time in your 
// browser. 


// function currentDate(){
//     let now = new Date()

//     document.getElementById("currentDate").innerHTML = now;
// }
// currentDate()




// 2. Write a function that takes first & last name and then it 
// greets the user using his full name. 


// function greetUser(firstName , lastName){
//     let fullName = firstName + " " + lastName

//     document.getElementById("greeting").innerHTML = "Hello " + fullName + "!"

// }

// let greet = prompt("enter your first name")
// let greet1 = prompt("enter your last name")

// greetUser(greet , greet1)




// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers. 


// function addTwoNumbers(){
//     let num = +prompt("Enter your first Number")
//     let num1 = +prompt("Enter your last Number")

//     let sum = num + num1

//     return sum;
// }

// let total = addTwoNumbers()
// document.getElementById("result").innerHTML = "The sum number is " + total




// 4. Calculator:  
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser. 


// function calculator(num1, num2, operator){
//     let result;

//     if(operator === "+"){
//         result = num1 + num2
//     }else if(operator === "-"){
//         result = num1 - num2
//     }else if(operator === "*"){
//         result = num1 * num2
//     }else if(operator === "/"){
//         result = num1 / num2
//     }else if(operator === "%"){
//         result = num1 % num2
//     }else{
//         result = "invalid operator!"
//     }

//     return result;
// }

// let n1 = +prompt("Enter your first number")
// let n2 = +prompt("Enter your second number")
// let op = prompt("Enter your operator. eg..'+ , - , * , / , %'")

// let output = calculator(n1, n2, op)

// document.getElementById("calcResult").innerHTML = "Result " + output




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


function calculateHypotenuse(base , perpendicular){

    function square(num){
        return num * num
    }

    let baseSquare = square(base)
    let perpendicularSquare = square(perpendicular)

    let hypotenuse = Math.sqrt(baseSquare + perpendicularSquare)

    return hypotenuse
}

let result = calculateHypotenuse(3 , 4)
document.writeln(result)









