// 1. Write a program that displays current date and time in
// your browser.

// var currentdate = new Date();
// document.write("current date: " + currentdate);

// 2. Write a program that alerts the current month in words.
// For example December.

// var allmonths =["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"];

//   var currentdate = new Date();

//   currentMonthIndex = currentdate.getMonth();

//   currentmonthname = allmonths[currentMonthIndex];

//   document.write("current month is "  + currentmonthname);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var alldays =  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var currentdate = new Date();

// currentdayIndex = currentdate.getDay();

// currentdayname = alldays[currentdayIndex];
// alert("crrent day is " + currentdayname);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var currentdate = new Date();

// var day = currentdate.getDay();

// if(day === 0 || day === 6){
// alert("its a fun day");
// }


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var userinput = +prompt("input date");
// var currentDate = new Date(userinput);


// if (currentDate < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.


// var date = new Date();

// var millisecSince1970 = date.getTime();

// minutesSince1970 = millisecSince1970 / (1000 * 60);

// document.write("current date is " + date + "<br>")
// document.write("elasped millisecond since, Jan. 1, 1970: " + millisecSince1970 + "<br>");
// document.write("elasped minutesSince1970 since, Jan. 1, 1970: " + minutesSince1970 );


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var date = new Date();
// var hours =date.getHours();

// if(hours < 12){
// alert("its noon")
// }else{
//     alert("its pm");
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date(2020,11,31);

// document.write("last day of the year " + laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var ramadanstart =new Date(2025,5,18);
// var today = new Date();
// var inmin = today - ramadanstart;
// var indays = Math.floor(inmin / (100 * 60 * 60 * 24));

// document.write(indays + " the num of the past ramadan SINCE");

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back

// var today = new Date();
// today.setFullYear(today.getFullYear()-100);

// document.write("100 years before " + today);


// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var age = +prompt("input your age");
// var currentage = new Date().getFullYear();
// var birthyear = currentage - age ;

// document.write("my age is " + age + "<br>");
// document.write("birth year is " + birthyear);

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
 
// //a
// var customername = "Mr Zain";
// //b
// var months =["January", "February", "March", "April", "May", "June", 
//                   "July", "August", "September", "October", "November", "December"];
// var currentmonth = months[new Date().getMonth()];
// //C
// var units = 410;
// //d
// var chargesofunit = 16;
// //e
// var amountpayable = units * chargesofunit; 
// //f
// var latePaymentSurcharge = 350;
// //g
// var grossamount = amountpayable + latePaymentSurcharge;

// document.write("<h1>k.ELECTRIC BILL</h1>" + "<br>");
// document.write("customer name " + customername + "<br>");
// document.write("current month " + currentmonth + "<br>");
// document.write("number of unit " + units + "<br>");
// document.write("charges of unit " + chargesofunit + "<br>");
// document.write("net amount payable (with due date) " + amountpayable + "<br>");
// document.write("late payment surcharge " + latePaymentSurcharge + "<br>");
// document.write("gross amount payable with (due date " + grossamount);
