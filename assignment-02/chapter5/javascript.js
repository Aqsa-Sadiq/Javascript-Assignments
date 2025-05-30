// 1. Write a program that take two numbers & add them in a
// new variable.
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// subtraction
var a = 5;
var b = 3; 
var sub = a - b;
document.write("Subtraction of " + a + " and " + b + " is " + sub +"<br>");

// multiplication
var a = 3;
var b = 5;
var mul = a * b;
document.write("multiplication of " + a + "and" + b + " is " + mul + "<br>");

// division
var a = 5;
var b = 3;
var div = a / b;
document.write("division of " + a + " by " + b + " is " + div + "<br>");

// module
var a = 5;
var b = 3;
var mod = a % b;
document.write("module of " + a + " by " + b + " is " + mod + "<br><br>");

//3. Do the following using JS Mathematic Expressions

// a. Declare a variable.
var a;
document.write("Value after variable declaration is: " + a + "<br>");

// b. Show the value of variable in your browser like “Value
// after variable declaration is 5.
 var a = 5;
document.write("Initial value: " + a + "<br>");


//e. Increment the variable.
//f. Show the value of variable in your browser like “Value
//after increment is: 6”.
a++;
document.write("Value after increment is: " + a + "<br>");

//g. Add 7 to the variable.
//h. Show the value of variable in your browser like “Value after addition is: 13”.

a += 7;
document.write("value of addition is " + a + "<br>");
//i. Decrement the variable.
//j. Show the value of variable in your browser like “Value
//after decrement is: 12”.
a--;
document.write("value after decrement is: " + a + "<br>");

//j. Show the remainder after the dividable variable value by 3
//output the remainder is 0

var rem = a % 3
document.write("the remainder is: " + rem +"<br><br>" );

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.

var cost = 600;
var qua = 5;
var totalcost = cost * qua;

document.write("Total cost of buy 5 tickets to a movie is " + totalcost + "pkr" + "<br><br>");

// 5. Write a script to display multiplication table of any
// number in your browser.
var num = 4 * 1;
var num2 =4 * 2;
var num3 = 4 * 3;
var num4 = 4 * 4;
var num5 =4 * 5;
var num6 = 4 * 6;
var num7 =4 * 7;
var num8 = 4 * 8;
var num9 =4 * 9;
var num10 = 4 * 10;
document.write("<h2>Table Of 4</h2>");
document.write("4 x 1 = " + num + "<br>");
document.write("4 x 1 = " + num2 + "<br>");
document.write("4 x 1 = " + num3 + "<br>");
document.write("4 x 1 = " + num4 + "<br>");
document.write("4 x 1 = " + num5 + "<br>");
document.write("4 x 1 = " + num6 + "<br>");
document.write("4 x 1 = " + num7 + "<br>");
document.write("4 x 1 = " + num8 + "<br>");
document.write("4 x 1 = " + num9 + "<br>");
document.write("4 x 1 = " + num10 + "<br><br>");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variable

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// a. Price of item 1
var priceItem1 = 650;

// c. Ordered quantity of item 1
var qtyItem1 = 3;

// b. Price of item 2
var priceItem2 = 100;


// d. Ordered quantity of item 2
var qtyItem2 = 7;

// e. Shipping charges
var shipping = 100;

// Compute total cost
var totalItem1 = priceItem1 * qtyItem1;
var totalItem2 = priceItem2 * qtyItem2;
var subtotal = totalItem1 + totalItem2;
 totalCost = subtotal + shipping;

document.write("<h2>Shopping Cart</h2>");
 document.write("price of 1 item is 650" +"<br>" );
 document.write("Quantity of item 1 is 3" + "<br>");
 document.write("price of item 2 is 100" + "<br>");
 document.write("Quantity of item 2 is 7" + "<br>");
 document.write("Shipping charges is 100" + "<br>");
 document.write("total cost of your order is " + (subtotal + shipping) + "<br>" );

//  8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser 
var totalMarks = 980;
var obtainedMarks = 804
let percentage = (obtainedMarks / totalMarks) * 100;

// Show the result in the browser
document.write("<h2>Student Result</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>"  );
document.write("Percentage: " + percentage + "%"+ "<br>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// Currency conversion using a single expression
var totalPKR = (10 * 104.80) + (25 * 28);

// Show the result in the browser
document.write("<h2>Currency Conversion</h2>");
document.write("Total in Pakistani Rupees: " + totalPKR + " PKR");


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// Display the result in the browser 
var number = 2 / 10 ;
var result = number * 2;
document.write("<h2>Arithmetic Operations</h2>");
document.write("Initial numbers of sum is: " + number +"<br>" );
document.write("result: " + result + "<br>");

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

// a. Store the current year
var currentYear = 2025;

// b. Store the birth year
var birthYear = 2000;

// c. Calculate the two possible ages
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Output the result 
document.write("<h2>Age Calculator</h2>");
document.write("<p>They are either" + age2 + " or " + age1 + " years old.</p>" + "<br>");

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// a. Store a radius into a variable
var radius = 20;

// Constants
var PI = 3.142;

// b. Calculate the circumference and area
var circumference = 2 * PI * radius;
var area = PI * radius * radius;

// Output the results
document.write("<h2>The Geomatrization</h2>");
document.write("Radious of a circle is 20")
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br><br>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// // NNNN to last you until the ripe old age of NN”.

// a
var favoriteSnack = "chocolate chip cookies";

// b
var currentAge = 15;

// c
var maxAge = 65;

// d
var amountPerDay = 3;

// e.
var yearsRemain = maxAge - currentAge;
var totalNeed = yearsRemain * amountPerDay;

// Output the result
document.write("<h2>The Life Time Supply Calculator</h2>");
document.write("Favourit snack is Chocolate chip" + "<br>");
document.write("Current age is 15" + "<br>");
document.write("Estimated Maximum age is 65" + "<br>");
document.write("Amount of snack per day is 3" + "<br>");
document.write("You will need " + totalNeed + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");

