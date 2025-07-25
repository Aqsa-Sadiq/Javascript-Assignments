//1. Write a custom function power ( a, b ), to calculate the value of
//a raised to b.

// function power(a,b){
//     if(b===0){
//         return 1;
//     }
//     else{
//         return a* power(a,b - 1)
//     }
// }
// console.log(power(2,3));

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// function leapyear(year){
//     if(year % 4 === 0 &&year % 100 !== 0 || year % 400 === 0 ){
// return true;
//     }else{
//         return false;
//     }
// }
// var year = 2020;

// if (leapyear(year)) {
//   console.log(year + " is a Leap Year");
// } else {
//   console.log(year + " is NOT a Leap Year");
// }

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

// function   caltriananglearea(a,b,c){
//     var s = (a + b + c) / 2;
//     //formula apply
//     var area = Math.sqrt(s* (s-a) * (s-b) * (s-c));
//     //return
//     return area
// }
// var sideA= 5;
// var sideB = 6;
// var sideC = 7;

// //triangle area
// var trianglearea = caltriananglearea(sideA , sideB , sideC);

// //lets console
// console.log("the area of triangle is " + trianglearea.toFixed(2));

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

//function 1
// function calculateaverage(m1 , m2 , m3){
// return(m1 + m2 + m3) / 3;
// }

// //function 2
// function calculatepercentage(m1 , m2 ,m3){
// var totalMaks = 300;
// var obtained = m1 + m2 +m3;
// return(obtained / totalMaks) * 100;
// }

// //function 3
// function  mainfunction(m1 , m2 ,m3){
// var average = calculateaverage(m1 ,m2 ,m3);;
// var percentage = calculatepercentage(m1 , m2 ,m3)


// // console
// console.log("Marks received: " + m1 + ", " + m2 + ", " + m3);
// console.log("Average marks " + average.toFixed(2));
// console.log("percentage " + percentage.toFixed(2)); 
// }
// //FUNCTION CALL
// mainfunction(80 , 90 , 75)

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now

// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }

// var result = customIndexOf("samsung", "s");
// console.log("Index is: " + result); 

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

// function delvowels(sentence){
// return sentence.replace(/[aeiouAEIOU]/g, "")
// }
// var result = delvowels("I love pakistan")
// console.log(result);

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence

//“Pleases read this application and give me gratuity”

// function countVowelPairs(sentence) {
//   var count = 0;
//   var vowels = "aeiouAEIOU";

//   for (var i = 0; i < sentence.length - 1; i++) {
//     var first = sentence[i];
//     var second = sentence[i + 1];

//     switch (true) {
//       case vowels.includes(first) && vowels.includes(second):
//         count++;
//         break;
//     }
//   }

//   return count;
// }
// var text = "Pleases read this application and give me gratuity";
// var result = countVowelPairs(text);
// console.log("Number of vowel pairs: " + result);

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// 
// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function calculateOvertimePay(hoursWorked) {
//     var overtimeRate = 12;
//     var overtimeHours = 0;
//     var overtimePay = 0;

//     if (hoursWorked > 40) {
//         overtimeHours = hoursWorked - 40;
//         overtimePay = overtimeHours * overtimeRate;
//     }

//     console.log("Total hours worked: " + hoursWorked);
//     console.log("Overtime hours: " + overtimeHours);
//     console.log("Overtime pay: Rs. " + overtimePay);
// }


// calculateOvertimePay(45); 

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

// function calculateNotes() {
//   var amount = +prompt("Enter the amount in Rupees (e.g. 370):");

//   if (amount % 10 !== 0 || amount <= 0) {
//     alert("Please enter a valid amount (multiple of 10).");
//     return;
//   }

//   var hundreds = Math.floor(amount / 100);
//   amount = amount % 100;

//   var fifties = Math.floor(amount / 50);
//   amount = amount % 50;

//   var tens = Math.floor(amount / 10);

//   var message =
//     "Currency Breakdown:\n" +
//     "100 Rs notes: " + hundreds + "\n" +
//     "50 Rs notes: " + fifties + "\n" +
//     "10 Rs notes: " + tens;

//   alert(message);
// }


// calculateNotes();
