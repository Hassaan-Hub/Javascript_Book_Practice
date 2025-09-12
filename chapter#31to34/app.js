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
