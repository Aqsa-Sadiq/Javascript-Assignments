// 1. Write a function that displays current date & time

// function displayCurrentDateTime() {
//     var now = new Date();
//     var dateTimeString = now.toLocaleString(); 
//     document.getElementById("datetime").innerHTML = "Current Date & Time: " + dateTimeString;
// }

// displayCurrentDateTime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greetuser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     alert("Hello, " + fullName + "!");
// }

// var first = prompt("Enter your first name:");
// var last = prompt("Enter your last name:");
// greetuser(first, last); 

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function addNum(num1 , num2){
//     return num1 + num2;
// }
// var firstNum = +prompt("input a num1");
// var secondNum = +prompt("input a num2");

// var sum =addNum(firstNum , secondNum);

// alert("The sum of addition is " + sum);


// 4. Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function calculate(num1, num2, operator) {
//     var result;

//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;

//         case "-":
//             result = num1 - num2;
//             break;

//         case "*":
//             result = num1 * num2;
//             break;

//         case "/":
//             result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
//             break;
//         default:
//             result = "Invalid operator";

//     }
//     return result;
// }

// var num1 = +(prompt("Enter the first number:"));
// var num2 = +(prompt("Enter the second number:"));
// var operator = prompt("Enter operator (+, -, *, /):");

// var output = calculate(num1, num2, operator);

// document.getElementById("result").innerHTML = "Result: " + output;

// 5. Write a function that squares its argument.

// function square(number) {
//     return number * number;
// }

// var num = +prompt("Enter a number to square:");
// var result = square(num);

// document.getElementById("result").innerHTML = "The square of " + num + " is: " + result;

// 6. Write a function that computes factorial of a number

// function factorial(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers.";
//     }

//     var result = 1;
//     for (var i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }

// var number = +prompt("Enter a number to calculate its factorial:");
// var output = factorial(number);

// document.getElementById("result").innerHTML = "Factorial of " + number + " is: " + output;

// 7. Write a function that take start and end number as inputs
// & display counting in your browser

// function displayCounting(start, end) {
//     var result = "";
//     for (var i = start; i <= end; i++) {
//         result += i + " ";
//     }
//     document.getElementById("counting").innerHTML = result;
// }

// var startNum = parseInt(prompt("Enter the start number:"));
// var endNum = parseInt(prompt("Enter the end number:"));

// displayCounting(startNum, endNum);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// function calculateHypotenuse(base, perpendicular) {

//     function calculateSquare(x) {
//         return x * x;
//     }

//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);

//     var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
//     return hypotenuse;
// }

// var base = parseFloat(prompt("Enter the base:"));
// var perpendicular = parseFloat(prompt("Enter the perpendicular:"));

// var result = calculateHypotenuse(base, perpendicular);

// document.getElementById("result").innerHTML = 
// "Hypotenuse = " + result.toFixed(2);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?

// function isPalindrome(str) {

//     var checked = str.toLowerCase().replace(/[^a-z0-9]/g, '');


//     var reversed = checked.split('').reverse().join('');

//     return checked === reversed;
// }
// var userInput = prompt("Enter a word or phrase:");
// if (isPalindrome(userInput)) {
//     alert("Yes, it's a palindrome!");
// } else {
//     alert("No, it's not a palindrome.");
// }

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.

// function capitalizeWords(str) {
//     var words = str.split(" ");
//     var capitalizedWords = words.map(function (word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(" ");
// }
// var input = prompt("Enter a sentence:");
// var output = capitalizeWords(input);
// alert("Capitalized: " + output);

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.

// function findLongestWord(str) {
//     var words = str.split(" ");
//     var longest = "";

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longest.length) {
//             longest = words[i];
//         }
//     }

//     return longest;
// }
// var input = prompt("Enter a sentence:");
// var longestWord = findLongestWord(input);
// alert("Longest word: " + longestWord);

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function countLetterOccurrences(str, letter) {
//     var count = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) === letter) {
//             count++;
//         }
//     }

//     return count;
// }
// var inputString = "JSResourceS.com";
// var letterToCount = "o";

// var count = countLetterOccurrences(inputString, letterToCount);
// alert("The letter '" + letterToCount + "' appears " + count + " times.");

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr


// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference.toFixed(2));
// }

// function calcArea(radius) {
//     var area = Math.PI * radius * radius;
//     console.log("The area is " + area.toFixed(2));
// }
// var r = +prompt("Enter the radius of the circle:");

// calcCircumference(r);
// calcArea(r);

