// 1. Write a program that displays current date and time in 
// your browser. 


// let currentDate = new Date()

// document.writeln(currentDate)




// 2. Write a program that alerts the current month in words. 
// For example December. 


// var date =  new Date()
// var month = date.getMonth()

// var monthNames = [
//     "January","Feburary","March","April","May","June",
//     "July","August","September","October","November","December"
// ]

// var indMon = monthNames[month]
// console.log(indMon);




// 3. Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show 
// Sun. 


// var date = new Date();
// var weekInd = date.getDay()

// let weekNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Set"]
// var res = weekNames[weekInd]

// console.log(res);




// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today. 


// var date = new Date()
// var day = date.getDay()

// let weekNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Set"]
// var indDay = weekNames[day]

// if(indDay == "Wed"){
//     alert("Let's go to sleep early")
// }else{
//     alert("Its time sleep")
// }




// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”. 


// var date = new Date()
// var month = date.getMonth()

// if(month < 16){
//     alert("Fist fifteen days of the month")
// }else{
//     alert("Last days of the month")
// }

// var monthNames = [
//     "January","Feburary","March","April","May","June",
//     "July","August","September","October","November","December"
// ]

// var indMon = monthNames[month]
// document.write(`Current Month of this year: ${indMon}`)



// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object. 


// let currentDate = new Date()

// let minutes = currentDate.getTime()

// let milliSeconds = minutes / (1000 * 60)

// document.writeln(`Current Date: ${currentDate}<br>`)
// document.writeln(`Elapsed minutes since January 1, 1970 ${minutes}<br>`)
// document.writeln(`Elapsed milliSeconds since January 1, 1970 ${milliSeconds}`)




// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.


// let currentDate = new Date()

// let currenHour = currentDate.getHours()

// if(currenHour < 12){
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }




// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate. 


// let currenDate = new Date(2024 , 12 , 0)

// document.writeln(`Letter Date: ${currenDate}`)




// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan? 
// Note: 1st Ramadan was on June 18, 2015 


// let ramadanDate = new Date("June 18 , 2015")

// let today = new Date()

// let diff = today - ramadanDate

// let daysPast = Math.floor(diff / (1000 * 60 * 60 * 24))

// alert(`${daysPast} days have past since 1st ramadan, 2015`)




// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015. 


// let curDate = new Date("Dec 5, 2024 22:50:16")

// let currenDate = new Date("Jan 1, 2015 00:00:00")

// let diff = curDate.getTime() - currenDate.getTime()

// let result = Math.floor(diff / 1000)

// document.writeln(`On refrence date Sat ${curDate}<br>`)
// document.writeln(`${result} seconds had passed since beginning of 2015`)




// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser. 


// let currenDate = new Date("Dec 15, 2015 22:08:16")
// let currenHour = currenDate.getHours("Dec 15, 23:08:16")

// document.writeln(`Current Date: ${currenDate}<br>`)

// currenDate.setHours(currenHour + 1)

// document.writeln(`1 hour ago it was ${currenDate}`)




// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back? 


// let currenDate = new Date("Dec 05, 2015 22:18:37")
// let fullYear = currenDate.getFullYear()

// document.writeln(`Current Date: ${currenDate}<br>`)

// currenDate.setFullYear(fullYear - 100)

// document.writeln(`100 year back, it was ${currenDate}`)




// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser. 


// let userAge = +prompt("Enter your age")

// let curDate = new Date("Sep 15, 2025 4:03")

// let curYear = curDate.getFullYear("Sep 15, 2025 4:03")

// curDate.setFullYear(curYear - userAge)

// document.writeln(`Your Age: ${userAge}<br>`)
// document.writeln(`Your Birth year: ${curDate}`)




// 14. Write a program to generate your K-Electric bill in your 
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields: 
// a. Customer Name 
// b. Current Month 
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) 
// Where, 
// Net Amount Payable (within Due Date) = Number of units * Charges per unit 
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge 


// // K-Electric Bill
// let customerName = prompt("Enter your name")

// let currentMonth = prompt("Enter current month", "September")

// let units = parseFloat(prompt("Enter your units", "410"))
// if (isNaN(units)) units = 0;

// let chargesPerUnit = parseFloat(prompt("Charges per unit (PKR):", "16"))
// if(isNaN(chargesPerUnit)) chargesPerUnit = 0;

// let latePaymentSurcharge = parseFloat(prompt("Late payment Surcharge (PKR):", "350"))
// if(isNaN(latePaymentSurcharge)) latePaymentSurcharge = 0;

// // calculation
// let netAmount = units * chargesPerUnit
// let grossAmount = latePaymentSurcharge + netAmount

// // 3) Format for display (2 decimal places)
// let chargesDisplay = chargesPerUnit.toFixed(2)
// let netDisplay = netAmount.toFixed(2)
// let lateDisplay = latePaymentSurcharge.toFixed(2)
// let grossDisplay = grossAmount.toFixed(2)

// // 4) Display nicely in the browser
// document.writeln(`<h1>K-Electric Bill<h1>`)
// document.writeln("<p><strong>Customer Name:</strong>" + (customerName || "N/A") + "</p>")
// document.writeln("<p><strong>Customer Month:</strong>" + (currentMonth || "N/A") + "</p>")

// document.writeln(`<table border='1' cellpadding='6' cellspacing='0'>`)
// document.writeln(`<tr> <td>Number of unit</td> <td>${units}</td> </tr>`)
// document.writeln(`<tr> <td>Charge per unit</td> <td>${chargesDisplay}</td> </tr>`)
// document.writeln(`<tr> <td>Amount Payable (within due date)</td> <td>${netDisplay} PKR</td> </tr>`)
// document.writeln(`<tr> <td>Late payment surcharge</td> <td>${lateDisplay} PKR</td> </tr>`)
// document.writeln(`<tr> <td> <strong>Gross Amount (After due Date)</strong> </td> <td>${grossAmount} PKR</td> </tr>`)
// document.writeln(`</table>`)

// // Optional: also show a short alert
// alert("Bill calculated - chack page for details:")







