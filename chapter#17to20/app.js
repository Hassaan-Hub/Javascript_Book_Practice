// 1. Declare and initialize an empty multidimensional array. 
// (Array of arrays)  


// let multiArr = [[1, 2], [3, 4], [5, 6]]

// console.log(multiArr);




// 2. Declare and initialize a multidimensional array 
// representing the following matrix:  


// 2D Array (Matrix)
// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// Display matrix
// console.log(matrix);


// // Accessing rows & columns
// console.log(matrix[0]);     // [0, 1, 2, 3]   → 1st row
// console.log(matrix[0][3]);  // 1             → row 2, column 3




// 3. Write a program to print numeric counting from 1 to 10.  


// for(let i = 1; i <=10; i++){
//     console.log(i);
// }




// 4.  Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.  


// let table = +prompt("Enter a number to show its multiplication table")
// let length = +prompt("Enter length multiplication table")

// for (let i = 1; i <= length; i++){
//     document.writeln(`${table} X ${[i]} = ${table * [i]} <br />`)
// }




// 5. Write a program to print items of the following array 
// using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for(let i = 0; i < fruits.length; i++){
//     document.writeln(`Element at index ${i} is ${fruits[i]} <br />`)
// }




// 6. Generate the following series in your browser. See 
// example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// a. Counting
// for(let i = 1; i <= 20; i++){
//     console.log(`${i}`)
// }

// console.log("<br />")

// b. Reverse counting
// for(let i = 20; i >= 1; i--){
//     console.log(`${i}`)
// }

// console.log("<br />")

// c. Even
// for(let i = 0; i <= 20; i+=2){
//     document.writeln(`${i}`)
// }


// d. Odd
// for(let i = 1; i <= 21; i+=2){
//     console.log(`${i}`)
// }

// e. series
// for(let i = 2; i <=20; i+=2){
//     console.log(`${i}K`);
// }




// 7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an 
// array. 
// After searching, prompt the user whether the given item is 
// found in the list or not. Example: 


// let A = ["cake", "apple pie", "cookie", "chips", "patties"] 

// let order = prompt("Welcome to ABC Bakery. What do you want to order?")

// if(A.indexOf(order)){
//     alert(`${order} is available at index ${A.indexOf(order)} in our Bakery`)
// }else{
//     alert(`we are sorry. ${order} is not available in our Bakery.`)
// }




// 8. Write a program to identify the largest number in the 
// given array. 
// A = [24, 53, 78, 91, 12]. 


// let num = [24, 53, 78, 91, 12]
// let largest = num[0]

// for (let i = 1; i < num.length; i++){
//     if(num[i] > largest){
//         largest = num[i]
//     }
// }

// document.writeln(`Array items: ${num} <br>`)
// document.writeln(`The largest number is: ${largest}`)




// 9. Write a program to identify the smallest number in the 
// given array. 
// A = [24, 53, 78, 91, 12]


// let num1 = [34, 5, 654, 6, 324, 2, 35, 6, 54, 4, 74, 67]

// let largest1 = num1[0]

// for(let j = 1; j <num1.length; j++){
//     if(num1[j] < largest1){
//         largest1 = num1[j]
//     }
// }

// document.writeln(`Array items: ${num1}<br>`)
// document.writeln(`The smalles number is: ${largest1}`)




// 10. Write a program to print multiples of 5 ranging 1 to 
// 100. 

// for (let i = 5; i <= 100; i+=5){
//     document.writeln(`${i}`)
// }





