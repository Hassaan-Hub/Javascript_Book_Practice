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


























