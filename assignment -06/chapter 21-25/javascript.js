// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("write your first name");
// var lastName = prompt("write your last name");

// var fullName = firstName + " " + lastName;

// alert("welcome " + fullName + " our website");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var favmobile = prompt("input your favourite mobile model");

// var modellength = favmobile.length;

// document.write("MY FAVOURITE MODEL IS " + favmobile + "<br>");
// document.write("LENGTH OF STRING IS " + modellength);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// var country = "pakistani";
// var wordindex = country.indexOf("n");

// document.write("index of n word is " + wordindex);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var spell = "hellow world";
// var indexspell = spell.lastIndexOf("l");

// document.write(spell + " and the last index of l is " + indexspell);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var nationality = "pakistani";
// var indexfind = nationality[5];

// document.write("character at index 5 is " + indexfind);

// 6. Repeat Q1 using string concat() method.

// var firstname = prompt("input first name");
// var lastname = prompt("input last name");
// var fullname = (firstname +" "+ lastname);

// document. write(fullname);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// var replacecity = city.replace("Hyder" , "Islam");

// document.write("city: " + city + "<br>");
// document.write("replace city: " + replacecity);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var sent = "Ali and Sami are best friends. They play cricket and football together.";
// var wordreplace = sent.split("and").join("&");

// document.write(wordreplace)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var str = "472";


// var num = Number(str)


// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br>");

// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num);


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.


// var userinput = prompt("input any noun");

// var capuppercase = userinput.toUpperCase();

//  document.write("capitalize " + capuppercase  );


// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var str = prompt("Input a sentence:");

// var word = str.split(" ");
// var titleCaseStr = "";

// for (var i = 0; i < word.length; i++) {
//   var capitalizeWord = word[i].slice(0,1).toUpperCase() + word[i].slice(1).toLowerCase();
//   titleCaseStr += capitalizeWord + " ";
// }

// document.write("Title Case: " + titleCaseStr.trim());


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;

// var str = num.toString();

// var repalcenum = str.replace("." , "");

// document.write(repalcenum);


//14

// var item= ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order?");


// var searchItem = userInput.toLowerCase();

// var found = false;

// for (var i = 0; i < item.length; i++) {
//   if (item[i].toLowerCase() === searchItem) {
//     found = true;
//     alert(userInput + " is available at index " + i + " in our bakery.");
//     break;
//   }
// }

// if (!found) {
//   alert("We are sorry. " + userInput + " is not available in our bakery.");
// }

//15 password program

// function isValidPassword(password) {
  
  
//   if (password.length < 6) {
//     return false;
//   }

  
//   var firstChar = password.charAt(0);
//   if (!isNaN(firstChar)) {
//     return false;
//   }

  
//   var letter = /[a-zA-Z]/.test(password); 
//   var number = /[0-9]/.test(password);  

//   if (!letter || !number) {
//     return false;
//   }

  
//   return true;
// }


// var password = prompt("Please enter your password:");


// if (isValidPassword(password)) {
//   document.write(" Password is valid. Welcome!");
// } else {
 
//   document.write(" Invalid password!<br><br>");
  
// }


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "university of karachi";

// var arr = university.split("");

// for( var i = 0; i < arr.length; i++){
// document.write(arr[i] + "<br>");
//}

// 17. Write a program to display the last character of a user
// input.
 
// var userinput = prompt("input any word");

// var lastchar = userinput[userinput.length -1];

// document.write("last character of word is " + lastchar);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// var text = "The quick brown fox jumps over the lazy dog";


// var lowerText = text.toLowerCase();


// var words = lowerText.split(" ");


// var count = 0;
// for (var i = 0; i < words.length; i++) {
//   if (words[i] === "the") {
//     count++;
//   }
// }


// document.write("Text: " + text + "<br>");
// document.write("Number of occurrences of 'the': " + count);
