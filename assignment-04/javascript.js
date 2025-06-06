// //welcome city users
//  var allowcity ="karachi";

// var city =prompt("enter the city");
// if (city === allowcity){
// alert(" welcome to the city of light");
// }else{
//     alert("sorry");
//}
  //write a program to take a gender as input user if the user is male give the message good morning sir if the user is female give the mesaage good morning madam
//   var gender1 = "male";
//   var gender2 =  "female";
//   var gender = prompt("enter your gender");

//   if(gender === gender1){
// alert("Good Morning Sir");
//   }
//   else if(gender === gender2){
//     alert("good morning madam");
//   }
   
  //3. Write a program to take input color of road traffic signal
//from the user?
// var color1 = "red";
// var color2 = "yellow";
// var color3 = "green";
// var entercolor =prompt("input the color");
// if(entercolor === color1){
//     alert("Must Stop");
// }
// else if(entercolor === color2){
// alert("ready to move")
// }
// else if(entercolor === color3){
// alert("move now")
// }
// document.write("<table border'1'>");
// document.write("<tr><th>signal colour</th><th>Message</th></tr>");
// document.write("<tr><td>"+ color1 + "</td><td>" + "MUST MOVE"+"</tr></td>");
// document.write("<tr><td>"+ color2 + "</td><td>" + "READY TO MOVE"+"</tr></td>");
// document.write("<tr><td>"+ color3 + "</td><td>" + "MOVE NOW"+"</tr></td>");

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
// var fuel = prompt(" input remaining fuel");
// if( fuel <= 0.25 ){
// alert("Please refill the fuel in your car")
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// var sub1 =+prompt("enter your obtained num sub1");
// var sub2 =+prompt("enter your obtained num sub2");
// var sub3 =+prompt("enter your obtained num sub3");

// const totalmark = 300;
//  var markObtained =(sub1 + sub2 + sub3);
// var per = (markObtained / totalmark) * 100;

//  var grade = '';
//     var remarks = '';

//     if (per >= 80) {
//         grade = 'A-one';
//         remarks = 'Excellent';
//     } else if (per >= 70) {
//         grade = 'A';
//         remarks = 'Good';
//     } else if (per >= 60) {
//         grade = 'B';
//         remarks = 'You need to improve';
//     } else {
//         grade = 'Fail';
//         remarks = 'Sorry';
//     }

//     document.write("<h3>"+"MarksSheet "+"</h3>" + "<br>");
//        document.write("Total MARKS " + totalmark + "<br>");
//        document.write("Marks obtained " + markObtained + "<br>");
//        document.write("Percentage " + per + "<br>");
//        document.write("Grade " + grade +"<br>");
//        document.write("Remarks " + remarks +"<br>");

      // 7; Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// const secretnum = 8;
// var userguess =+prompt("guess the number");
// // b. If the guessed number +1 is the secret number, show
// // “Close enough to the correct answer”.
// if(userguess === secretnum){
// alert("Bingo ! correct answer");
// }
// else if(userguess + 1 ===secretnum){
// alert("close enough to the correct answer")
// } 
// else{
//   alert("you are wrong");
// }  

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// var number = +prompt("given number is divide by 3");
// if(number % 3 ===  0){
//   alert("number is dividable by 3");
// }
// else{
//   alert("number is not dividable by 3");
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var inputnum = +prompt("input any num to check even or odd");

// if (inputnum % 2 === 0){
// alert("it is even number");
// }
// else {
// alert("it is odd number")
// }
// .10 Write a program that takes temperature as input and
// shows a message based on following criteria
// var tem =prompt("input weather degree");
// // a. T > 40 then It is too hot outside.”
// if(tem > 40){
// alert(" It is too hot outside");
// }
// // b. T > 30 then “The Weather today is Normal.”
//  else if(tem > 30){
// alert("The Weather today is Normal");
// }
// // c. T > 20 then “Today’s Weather is cool.”
// else if(tem > 20){
// alert("Today’s Weather is coo");
// }
// // d. T > 10 then “OMG! Today’s weather is so Cool.”
// else if(tem > 10){
// alert("OMG! Today’s weather is so Cool");
// }
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var firstnum = +prompt("enter number");
// var secondnum = +prompt("enter number");
// var operation =prompt("enter operation +, -, *, /, %");

// if (operation === "+"){
//   alert("result " + (firstnum + secondnum));
// }else if (operation === "-") {
//     alert("Result: " + (firstnum - secondnum));
// } else if (operation === "*") {
//     alert("Result: " + (firstnum * secondnum));
// } else if (operation === "/") {
//         alert("Result: " + (firstnum / secondnum));
// } else if (operation === "%") {  
//         alert("Result: " + (firstnum % secondnum));
// } else {
//     alert("Invalid operation entered.");
// }
