// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var posInt = +prompt("enter a positive integer");

// document.write("number" + posInt + "<br>");
// document.write("roundoff value" + Math.round(posInt) + "<br>");
// document.write("floor value" + Math.floor(posInt) + "<br>");
// document.write("ciel value" + Math.ceil(posInt) + "<br>");

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

//  var negInt = +prompt("enter a neg integer");

//  document.write("number" + negInt + "<br>");
//  document.write("roundoff value" + Math.round(negInt) + "<br>");
//  document.write("floor value" + Math.floor(negInt) + "<br>");
//  document.write("ciel value" + Math.ceil(negInt) + "<br>");

// 3. Write a program that displays the absolute value of a
// number.

// var inputnum = +prompt("input number");

// var absvalue =Math.abs(inputnum);

// document.write("the abslute value of -7 is " + absvalue);


// 4. Write a program that simulates a dice using random()
// method of JS Math class.

// var dicenum = Math.floor(Math.random()*6)+1;


// document.write("random dice value is " + dicenum);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class.


// var toss = Math.floor(Math.random()*2)+1


// if (toss === 0) {
//   alert("random coin value is Heads");
// } else {
//   alert("random coin value is Tails");
// }

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var randomNumber = Math.floor(Math.random() * 100) + 1;


// document.write("Random number between 1 and 100 is: " + randomNumber);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var userInput = prompt("Enter your weight");

// var weight = parseFloat(userInput);

// alert("Your weight is: " + weight + " kilograms");

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// var secretNumber = 5;

// var userGuess = +prompt("Guess the secret number");

// if (userGuess === secretNumber) {
//   alert("Congratulations! You guessed the correct number.");
// } else {
//   alert("Sorry! The correct number was " + secretNumber);
// }
