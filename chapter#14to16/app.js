// 1. Declare an empty array using JS literal notation to store 
// student names in future. 


// let num = []

// num.push("Hassaan")
// num.push("Majid")

// console.log(num);




// 2. Declare an empty array using JS object notation to store 
// student names in future. 


// let num1 = new Array()

// num1.push("hi")
// num1.push("Kaif")

// console.log(num1);




// 3. Declare and initialize a strings array. 


// let usernames = ["Hassaan" , "Majid" , "Ahmed" , "Kaif"]

// console.log(usernames[0]);




// 4. Declare and initialize a numbers array.


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers = (numbers[2])

// console.log(numbers);




// 5.  Declare and initialize a boolean array. 


// let b = [true, false, true, false]

// console.log(b[2]);




// 6. Declare and initialize a mixed array. 


// let mixArray = ["Apple", 2, 3, 4, true, false]

// console.log(mixArray[5]);




// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like: 


// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]

// document.writeln(`<h1>Education Qualification</h2>`)
// document.writeln(`<ol>`)

// for (let i = 0; i < qualifications.length; i++){
//     document.writeln(`<li>${qualifications[i]}</li>`)
// }

// document.writeln(`</ol>`)




// 8. Write a program to store 3 student names in an array.Take 
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:  


// let student = ["Hassaan", "Majid", "Muhammad"];


// let score = [250, 350, 450];

// let totalmarks = 500;

// document.writeln("<h2>Students Result</h2>")

// for (let i = 0; i < student.length; i++){
//     let percentages = (score[i] / totalmarks) * 100
//     document.writeln(`The scores ${student[i]} is ${score[i]}. Percentage: ${percentages.toFixed(2)}% <br />`)
// }




// 9. Initialize an array with color names. Display the array 
// elements in your browser. 
// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser. 
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 
// d. Delete the first color in the array. Display the updated 
// array in your browser. 
// e. Delete the last color in the array. Display the updated 
// array in your browser. 
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser. 
// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined 
// position/index. . Display the updated array in your 
// browser. 


// let colors = ["Red", "Green", "Blue", "Yellow"]

// document.writeln(`<h2>Initial colore:</h2> ${colors} <br />`)

// let chFirstCl = prompt("Update your first color")
// colors.unshift(chFirstCl)

// document.writeln("<b>After adding to beginning:</b> " + colors + "<br><br>")

// let chScondCl = prompt("Update your end color")
// colors.push(chScondCl)

// document.write("<b>After adding to end:</b> " + colors + "<br><br>");

// colors.unshift("orange", "purple")
// document.write("<b>After adding 2 more to beginning:</b> " + colors + "<br><br>");

// colors.shift()
// document.write("<b>After deleting to first color:</b> " + colors + "<br><br>");

// colors.push("Apple","Banana")
// document.write("<b>After adding 2 to ending:</b> " + colors + "<br><br>");

// colors.pop()
// document.write("<b>After deleting to end color:</b> " + colors + "<br><br>");


// let indexAdd = +prompt("At which index do you want to add color?")
// let colorName = prompt("Enter the color name:")

// document.writeln(`Befor adding color: ${colors} <br />`)

// colors.splice(indexAdd , 0 , colorName)
// document.writeln(`After adding index color ${indexAdd}: ${colors} <br />`)

// let indexDel = +prompt("At which index do you want to delete color(s)?");
// let howMany = +prompt("How many color do you want to delete?")

// document.writeln(`Befor Delete color: ${colors} <br />`)

// colors.splice(indexDel , howMany)
// document.write("<b>After deleting " + howMany + " color(s) from index " + indexDel + ":</b> " + colors + "<br><br>");




// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.


// let array = [423, 54, 654, 76, 454, 34]
// array.sort()                                 //  local way

// document.writeln(`Scores of students ${array}`)
// array.sort(function (a, b) {                 //  correct way
//     return a - b
// })
// document.writeln(`Ordered scores of students`)




// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.


// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// document.writeln(`<b>Cities List:</b> ${cities} <br /><br />`)

// let selectedCities = cities.slice(0 , 2)
// document.writeln(`<b>selected list:</b> ${selectedCities} <br />`)




// 12.  Write a program to create a single string from the 
// below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method)


// var arr = ["This ", " is ", " my ", " cat"]; 

// document.writeln(arr.join(''))




// 13. Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out) 


// let array = []

// array.push("Apple")
// array.push("Orange")
// array.push("banana")

// document.writeln(`<h3>Divices:</h3>${array} <br> <br>`)
// document.writeln(`first output: ${array.shift()} <br>`)
// document.writeln(`second output: ${array.shift()} <br>`)
// document.writeln(`third output: ${array.shift()} <br>`)




// 14. Create a new array. Store values one by one in such a way 
// that you can access the values in reverse order. (Last In
// First Out)


// let reverse = []
// reverse.push("banana")
// reverse.push("Orange")
// reverse.push("Apple")

// document.writeln(`<h3>Divices:</h3>${reverse} <br> <br>`)
// document.writeln(`first output: ${reverse.pop()} <br>`)
// document.writeln(`second output: ${reverse.pop()} <br>`)
// document.writeln(`third output: ${reverse.pop()} <br>`)




// 15. Write a program to store phone manufacturers (Apple, 
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method: 


let phoneM = ["Apple", "Samsung", "Vivo", "Redmi", "Realme", "Infinix"]


document.writeln(`<h2>Which company you have phone</h2>`)
document.writeln(`<select>`)

for(let i = 0; i < phoneM.length; i++){
        document.writeln(`<option>${phoneM[i]}</option>`);
}

document.writeln(`</select>`)
