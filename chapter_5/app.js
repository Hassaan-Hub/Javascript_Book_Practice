// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser. 


// let num1 = prompt("Enter your first number")
// let num2 = prompt("Enter your last number")

// num1 = parseFloat(num1)
// num2 = parseFloat(num2)

// let sum = num1 + num2

// console.log("Sum of " + num1 + " and " + num2 + " is " + sum);




// 2. Repeat task1 for subtraction, multiplication, division & 
// modulus. 


// let sub1 = 10;
// let sub2 = 5;

// let subtraction = sub1 - sub2;

// console.log("Subraction result: " + subtraction + "</br>");




// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value 
// after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial 
// value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value 
// after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value
// after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value 
// after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value 
// by 3.  
// l. Output : “The remainder is : 0”. 


// var num;
// document.writeln("Value after variable declaration is: " + num + "</br>")

// num = 5;
// document.writeln("Initial value: " + num + "</br>")

// ++num;
// document.writeln("Value after increment is: " + num + "</br>")

// num = num + 7
// document.writeln("value after addition is : " + num + "</br>")

// --num;
// document.writeln("Value after decrement is :" + num + "</br>")

// num = num % 3
// document.writeln("The remainder is: " + num +"</br>")




// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store 
// ticket price in a variable & calculate the cost of buying 5 
// tickets 
// to a movie. Example output: 


// let ticketPrice = 600;
// let buyingTicket = 5;

// let total = ticketPrice * buyingTicket

// console.log("Total cost to buy 5 Tickets to a movie is " + total + "PKR")




// 5. Write a script to display multiplication table of any 
// number in your browser. E.g


// let table = 4;

// for (let i = 1; i <=10; i++){
//     document.writeln(table + " X " + i + " = " + (table * i) + "</br>");
// }




// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”.


// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32

// document.writeln(`${celsius}°C is ${fahrenheit}°F </br>`)

// var fahrenheit = 70;
// var celsius = (fahrenheit - 32) * 5/9

// document.writeln(`${fahrenheit}℉ is ${celsius}°C </br>`)




// 7.  Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges


// var price1 = 650;
// var quantity1 = 3;

// var price2 = 100;
// var quantity2 = 7;

// var shippingCharges = 100;
// var total = ((price1 * quantity1) + (price2 * quantity2) + shippingCharges);

// document.writeln(`<h2>Shopping Cart</h2>`)
// document.writeln(`Price of item 1 is ${price1} </br>`)
// document.writeln(`Quantity of item 1 is ${quantity1} </br>`)
// document.writeln(`Price of item of 2 is ${price2} </br>`)
// document.writeln(`Quantity of item 2 is ${quantity2} </br>`)
// document.writeln(`Shipping Charges ${shippingCharges} </br> </br> </br>`)

// document.writeln(`Total cost of your order is ${total}`)




// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser


// var totalMarks = 980;
// var obtainedMarks = 804;

// var result = (obtainedMarks / totalMarks) * 100

// document.writeln(`<h2>Mark Sheet</h2>`)
// document.writeln(`Total Marks: ${totalMarks} </br>`)
// document.writeln(`Marks Obtained: ${obtainedMarks} </br>`)
// document.writeln(`Parcentage: ${result}% </br>`)




// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)


// var dollers = 10;
// var pkrRopees1 = 104.80

// var riyals = 25;
// var pkrRopees2 = 28;

// var totalRopees = (dollers * pkrRopees1) + (riyals * pkrRopees2)

// document.writeln(`Total Curency in PKR: ${totalRopees}`)


