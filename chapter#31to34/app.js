// 1. Write a program that displays current date and time in 
// your browser. 


// let currentDate = new Date()

// document.writeln(currentD)




// 2. Write a program that alerts the current month in words. 
// For example December. 


// let currentDate = new Date()

// let nameIndex = currentDate.getMonth()

// let monthNames = [
//     "January","Feburary","March","April","May","June",
//     "July","August","September","October","November","December"
// ];

// let currentMonth = monthNames[nameIndex];

// document.writeln(`Current Month is: ${currentMonth}`)




// 3. Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show 
// Sun. 


// let currentDate = new Date()
// let weekIndex = currentDate.getDay()

// let weekNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Set"]

// let currentDay = weekNames[weekIndex]

// document.writeln(`Current Day is: ${currentDay}`)




// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today. 


// let currentDate = new Date()

// let nameIndex = currentDate.getDay()


// let weekNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Set"]

// let currentDay = weekNames[nameIndex]


// if(currentDay === "Sun" || currentDay === "Set"){
//     alert(`${currentDay} Its fun day`)
// }else{
//     alert(`${currentDay} Its work day`)
// }




// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”. 


// let currentDate = new Date()

// let nameIndex = currentDate.getMonth()

// if(nameIndex <= 15){
//     alert("First fifteen days of the month");
// }else{
//     alert("Last days of the month")
// }
    
// let monthNames = [
//     "January","Feburary","March","April","May","June",
//     "July","August","September","October","November","December"
// ];

// let currentMonth = monthNames[nameIndex]

// document.writeln(`Current Month is: ${currentMonth}`)




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


let curDate = new Date("Dec 5, 2024 22:50:16")

let currenDate = new Date("Jan 1, 2015 00:00:00")

let diff = curDate.getTime() - currenDate.getTime()

let result = Math.floor(diff / 1000)

document.writeln(`On refrence date Sat ${curDate}<br>`)
document.writeln(`${result} seconds had passed since beginning of 2015`)