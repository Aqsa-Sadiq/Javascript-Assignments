/*1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122)*/

// var userInput =prompt("enter a single character");

// if(!userInput || userInput.length !== 1){

// }else{
//    var asciiCode=userInput.charCodeAt(0);
// } 

// if(asciiCode >=65 && asciiCode <=90){
//     alert("The input is an uppercase letter.");
// }else if(asciiCode >=97 && asciiCode <=122){
// alert("the input is lowerCase");
// }else if(asciiCode >=48 && asciiCode <=57){
// alert("you entered a number");
// }
// else{
//     alert("you entered special character");
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var integer1 =+prompt("enter integer");
// var integer2 =+prompt("enter integer");

// if(integer1 > integer2){
// alert("the larger number is " + integer1);
// }else if (integer2 > integer1) {
//   alert("The larger number is " + integer2);
// }else {
//   alert("Both numbers are equal.");
// }


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var num = +prompt("input a number");

// if(num > 0){
// alert("it is positive");
// }else if(num < 0){
//     alert("it is negative num");
// }else {
//     alert("it is zero");
// }


// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// var char = prompt("enter a character");

// if(char.length == 1){
// char = char.toLowerCase();

// if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//     alert(true);
// } else {
//     alert(false);
//   }
// } else {
//   alert("Please enter exactly one character.");
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var correctpassword = "hackathon123";
// var userpassword =prompt("enter your password");

// if(!userpassword){
//     alert("enter your correct password");
// }else if(correctpassword === userpassword){
// alert("correct");
// }else{
//     alert("incorrect password");
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
 
// var greeting ;
// var hours = + prompt("enter your hours")


// if(hours < 18){
// greeting = "good day";
// }else {
//     greeting = "good evening";
// }
// alert(greeting);

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var time = +prompt("input hours clock format");

// if (time >= 0000 && time < 1200) {
//   alert("Good morning!");
// } 
// else if (time >= 1200 && time < 1700) {
//   alert("Good afternoon!");
// } 
// else if (time >= 1700 && time < 2100) {
//   alert("Good evening!");
// } 
// else if (time >= 2100 && time <= 2359) {
//   alert("Good night!");
// } else {
//   alert("Invalid time");
// }