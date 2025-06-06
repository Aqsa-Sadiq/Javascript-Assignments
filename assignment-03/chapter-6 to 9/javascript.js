//1. Write a program to take a number in a variable, do the
//required arithmetic
var a = 10;
document.write("the value of a is: " + a + "<br><br>");

// var a = 10;
document.write("The value of ++a is: " + ++a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// var a = 11;
document.write("The value of a++ is: " + a++ + "<br>");
document.write(" Now the value of a++ is: " + a + "<br><br>");

// var a = 12;
document.write("the value of --a is: " + --a + "<br>");
document.write("Now the value of --a is: " + a + "<br><br>");

//var a = 11;
document.write("the value of --a is: " + a-- + "<br>");
document.write("Now the value of --a is: " + a + "<br><br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

//soive;
// --a; =  1
//  --b; =  0
//  --a - --b = 1;

//  ++b = 2
//  b-- = 0
//  ++b + --b = 2

 document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + result + "<br>");

//3. Write a program that takes input a name from user &
//greet the user.
var name = prompt("enter your name");
alert ("welcome  to our website " + name );

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var num1 = +prompt("enter number" , 5);
var num2 = (num1 * 7);
document.write(num2);


// 6. make a percentage result
var english = prompt("enter subject1");
var urdu = prompt("enter subject2");
var math = prompt("enter subject3");

//(b)Total marks for each subject is 100
const totalmarks = 100;

//c) Take obtained marks for first subject
var marks1 = prompt("enter obtianed marks " + english);

//d) Take obtained marks for remaining 2 subjects
var marks2 = prompt
("enter obtianed marks " + urdu);

var marks3 = prompt("enter obtianed marks " + math);


//e) Now calculate marks and percentage
var percentage1 = (marks1 / totalmarks) * 100;
var percentage2 = (marks2 / totalmarks) * 100;
var percentage3 = (marks3 / totalmarks) * 100;

// Now calculate total marks and percentage
var obtainedMarks = marks1 + marks2 + marks3;
var total3submarks = totalmarks * 3;
var overallpercentage = (obtainedMarks / total3submarks) * 100;



  // Display results
  document.write("<table border='1'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
  document.write("<tr><td>" + english + "</td><td>" + totalmarks + "</td><td>" + marks1 + "</td><td>" + percentage1 + "%</td></tr>");
  document.write("<tr><td>" + urdu + "</td><td>" + totalmarks + "</td><td>" + marks2 + "</td><td>" + percentage2 + "%</td></tr>");
  document.write("<tr><td>" + math + "</td><td>" + totalmarks + "</td><td>" + marks3 + "</td><td>" + percentage3 + "%</td></tr>");
  document.write("<tr><th>Total</th><th>" + total3submarks + "</th><th>" + obtainedMarks + "</th><th>" + overallpercentage + "%</th></tr>");
  document.write("</table>");







