// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result = result * a;
//     }
//     return result;
// }

// console.log(power(2, 4));

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function isLeapYear(year) {
//     year = Number(year);
//     if (year % 400 === 0) {
//         document.write(`${year} is a leap year`);
//     }else if (year % 100 === 0){
//         document.write(`${year} is not a leap year`);
//     }else if (year % 4 === 0){
//         document.write(`${year} is a leap year`);
//     }else{
//         alert(`${year} is not a leap year`);
//     }
// }

// var user = prompt("Enter a year");

// isLeapYear(user);

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function triangleArea(a, b, c){
//     let S = (a + b + c) / 2;
//     var area = Math.sqrt(S * (S - a) * (S - b) * (S - c))
//     return area;
// }

// var result = triangleArea(4, 5, 7)
// document.write(`Area of triangle: ${result}`)

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function calculateAverage(m1, m2, m3){
//     return (m1 + m2 + m3) / 3
// }

// function calculatePercentage(m1, m2, m3){
//     var totalMarks = 300;
//     var obtainedMarks = m1 + m2 + m3;

//     var percentage = (obtainedMarks / totalMarks) * 100

//     return percentage;
// }

// function mainFunction(){
//     var marks1 = 80;
//     var marks2 = 70;
//     var marks3 = 90;

//     var average = calculateAverage(marks1, marks2, marks3)
//     var percentage = calculatePercentage(marks1, marks2, marks3)

//     console.log(`Average: ${average}%`);
//     console.log(`percentage: ${percentage}%`);
// }

// mainFunction()

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function characterIndexOf(stri, char){
//     for(var i = 0; i < stri.length; i++){
//         if(stri[i] === char){
//             return stri[i]
//         }else{
//             console.log("Unvalid");
//         }
//     }
//     return -1
// }
// var nam = "imran"
// var result = characterIndexOf(nam, "k")
// console.log(result);

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function deleteVowels(sentence){
//     var result = "";

//     for(var i = 0; i < sentence.length; i++){
//         var char = sentence[i].toLowerCase();

//         if(char !== "a" && char !== "e" && char !== "i" && char !== "o" && char !== "u"){
//             result += char;
//         }
//     }
//     return result;
// }

// var text = "This is test sentence"
// var out = deleteVowels(text)
// console.log(out);

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


// function vowels(sentence) {
//   var count = 0;
//   var text = sentence.toLowerCase();

//   for (var i = 0; i < text.length; i++) {
//     var first = text[i];
//     var second = text[i + 1];

//     switch (first) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         switch(second){
//           case "a":
//           case "e":
//           case "i":
//           case "o":
//           case "u":
//           count++
//           console.log(`found fairs: ${first} ${second}`)
//           break;
//         }
//       break
//     }
//   }
//   return count;
// }
// var text = "Pleases read this application and give me gratuity"
// console.log(`Total consecutive vowel pairs: ${vowels(text)}`);




// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


// function meters(km){
//   return km * 1000
// }

// function feet(km){
//   return km * 3280.84
// }

// function inches(km){
//   return km * 39370.1
// }

// function centimeters(km){
//   return km * 100000
// }

// var user = parseFloat(prompt("Distance between two cities (in km) enter km.."))

// document.write(`Distance in Meters: ${meters(user)}<br>`)
// document.write(`Distance in Feet: ${feet(user)}<br>`)
// document.write(`Distance in Inches: ${inches(user)}<br>`)
// document.write(`Distance in Centimetters: ${centimeters(user)}`)




// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.


// var workHours = parseFloat(prompt("Enter your hour"))

// function calculateOvertimePay(hour){
//     var overtimePay = 12.00
//     var employeesHour = hour

//     if(employeesHour > 40){
//         return (employeesHour - 40) * overtimePay
//     }else{
//         return 0
//     }
// }

// console.log(`Overtime Pay: ${calculateOvertimePay(workHours)}`);




// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.




// function calculateNotes(amount){
//     var notes100 = Math.floor(amount / 100)
//     var remaining = notes100 % 100

//     var notes50 = Math.floor(amount / 50)
//     remaining = notes50 % 50

//     var notes10 = Math.floor(amount)
//     remaining = notes10 % 10

//     console.log(`100 Rs Notes: ${notes100}`);
//     console.log(`50 Rs Notes: ${notes50}`);
//     console.log(`10 Rs Notes: ${notes10}`);
    
//     if(remaining > 0){
//         console.log(`Remaining amount that cannot be given in available notes: ${remaining}`);
//     }
// }

// var withdraweAmount = parseFloat(prompt("Enter your withdrawe amount.."))
// calculateNotes(withdraweAmount)
