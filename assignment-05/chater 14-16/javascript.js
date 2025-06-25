//1. Declare an empty array using JS literal notation to store
//student names in future.
//var studentName = [];

//2. Declare an empty array using JS object notation to store
//student names in future.
//var studentNames = new Array();

//3. Declare and initialize a strings array.
//var studentNames =["hamna" , "manahil" , "nimra" ,"aish"];

// 4. Declare and initialize a numbers array.
//var numbers = [10, 20, 30, 40, 50];

//5. Declare and initialize a boolean array.
//var boolean = [true, false, true, false];

//6. Declare and initialize a mixed array.
//var mixedArray = ["Hello", 123, true, null, undefined];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser 

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// for (var i = 0; i < qualifications.length; i++) {
//   document.write(+(i + 1) + ") " + qualifications[i]);
// }

//  8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student,

//  var students =["Ali" , "Aish" , "Zain"]; 
//  var getmarks =[367 , 450 , 279];
//  const total = 500;
 

//  document.write("Score of  " + students[0] + " is " + getmarks[0] + " percentage " + getmarks[0]/total*100+"%"+"<br>");
//  document.write("Score of  " + students[1] + " is " + getmarks[1] + " percentage " + getmarks[1]/total*100+"%" + "<br>");
//  document.write("Score of  " + students[2] + " is " + getmarks[2] + " percentage " + getmarks[2]*100/total+"%");

//9. array with colors names add and delete method
//var colors = ["red", "green", "blue", "yellow"];
//document.write(colors);

// a. Add to the beginning
//var newColorStart = prompt("Enter a color to add to the beginning:");
//colors.unshift(newColorStart);

// // b. Add to the end
// var newColorEnd = prompt("Enter a color to add to the end:");
// colors.push(newColorEnd);

// // c. Add two more to the beginning
// colors.unshift("purple", "orange");

// // d. Delete first element
// colors.shift();

// // e. Delete last element
// colors.pop();

// // f. Add at specific index
// var indexAdd = parseInt(prompt("Enter the index to add a color:"));
// var colorAdd = prompt("Enter the color to add:");
// colors.splice(indexAdd, 0, colorAdd);


// // g. Delete from specific index
// let indexDelete = parseInt(prompt("Enter the index to delete from:"));
// let numberToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexDelete, numberToDelete);
// document.write(colors);

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var studentScore = [320 ,230 ,450 ,150];
// document.write("Original scores: " + studentScore + "<br>");

// studentScore.sort();
// document.write("ordered score of student " + studentScore)


//    11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

//  var cities = ["karachi" , "hyderabad" , "lahore" , "multan" , "peshawar"];
//  var selectedCities = cities.slice(1 , 4);

//  document.write("Main cities" + cities +"<br>");
//  document.write("selected cities" + selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This ", " is ", " my ", " cat"];
// var joinArr= arr.join("");


// document.write("Array: " + arr + "<br>");
// document.write("string: " + joinArr);


// Create an empty array
// var fifoArray = [];

// Store values one by one (using push)
// fifoArray.push("keyboard");
// fifoArray.push("mouse");
// fifoArray.push("printer");
// fifoArray.push("monitor");

// // Display the array
// document.write("Devices " + fifoArray.join(", ") + "<br>");

// // acess the method
// document.write("OUTPUT:<br>");
// document.write(fifoArray.shift() + "<br>"); 
// document.write("OUT"+ "<br>"+ fifoArray.shift() + "<br>"); 
// document.write("OUT"+ "<br>" + fifoArray.shift() + "<br>"); 
// document.write("OUT"+"<br>" + fifoArray.shift() + "<br>"); 

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)
//  var lifoArray = [];

// // Store values one by one (using push)
// lifoArray.push("keyboard");
// lifoArray.push("mouse");
// lifoArray.push("printer");
// lifoArray.push("monitor");

// // // Display the array
// // document.write("Devices " + fifoArray.join(", ") + "<br>");

// // // acess the method
// document.write("OUTPUT:<br>");
//  document.write(lifoArray.pop() + "<br>"); 
//  document.write("OUT"+ "<br>"+ lifoArray.pop() + "<br>"); 
//  document.write("OUT"+ "<br>" + lifoArray.pop() + "<br>"); 
//  document.write("OUT"+"<br>" + lifoArray.pop() + "<br>"); 

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser 

var companies = ["Apple" ," Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
document.write("<select>")

for(i = 0; i < companies.length; i++){
document.write("<option>" + companies[i] + "</option>")
}
document.write("</select>");