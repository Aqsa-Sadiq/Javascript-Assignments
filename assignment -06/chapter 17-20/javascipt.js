// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var multiArray = [];

// multiArray.push([1, 2, 3]);
// multiArray.push([4, 5, 6]);

// console.log(multiArray);

//2. Declare and initialize a multidimensional array

// var number = [];

// number.push([0,1,2,3]);
// number.push([1,0,1,2]);
// number.push([2,1,0,1]);

// console.log(number);

//3. Write a program to print numeric counting from 1 to 10.

// for(var i = 1 ; i <= 10; i++){
// console.log(i)
// }

// 4. Write a program to print multiplication table of any
// number using for loop.

// var tablenum = +prompt("enter a table number");
// var tablelenght = +prompt("enter a table length");

// for(var i = 1; i <= tablelenght; i++){
// console.log(tablenum + "x" + i + "=" + tablenum * i);
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// Define the array
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (var i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
  
// }
// var index1 = fruits.indexOf("apple")
// console.log("Index of apple is: " + index1);

// var index2 = fruits.indexOf("banana")
// console.log("Index of banana is: " + index2);

// var index3 = fruits.indexOf("mango")
// console.log("Index of mango is: " + index3);

// var index4 = fruits.indexOf("orange")
// console.log("Index of orange is: " + index4);

// var index5 = fruits.indexOf("strawberry")
// console.log("Index of strawberry is: " + index5);


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//a
// document.write("counting ")
// for(i = 1; i <= 15; i++){
// document.write(i);
//  if (i < 15) document.write(", ");

// }
// document.write("<br>");

// //b
// document.write("Reverse counting ");
// var num =[1,2,3,4,5,6,7,8,9,10]
// num.reverse();
// document. write(num + "<br>");

// //c
// document.write("even number ");
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     document.write(i); 
//     if(i < 20) document.write(", ");
//   }
// }
// document.write("<br>");

// //d
// document.write("odd num ");
// for(var i = 1; i <= 20; i++) {
//     if(i % 2 !== 0)
//         document.write(i);
//     if(i < 20) document.write(",");
    
// }
// document.write("<br>");

// //e
// document.write("series ");
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     document.write(i + "k"); 
//     if(i < 20) document.write(", ");
//   }
// }


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt

// var youritem =prompt("please enter your item sir/madam").toLowerCase();
// var bakitem = ["cake" , "apple pie" , "cookie" ,"chips" , "patties"];
// var found = false;

// for (var i = 0; i < bakitem.length; i++){
//     if(bakitem[i].toLocaleLowerCase() === youritem){
//     found = true; 
//     alert(youritem + " is available at index " + i + " in our bakery.");
//     break;
//     }
//   }
//   if (!found) {
//   alert("We are sorry, " + youritem + "available in our bakery.");
//}

// 8. Write a program to identify the largest number in the
// given array.

// var A = [24, 53, 78, 91, 12];
// var largest = A[0]; 

// for (var i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i]; 
//   }
// }

// console.log("The largest number is: " + largest);

// 9. Write a program to identify the smallest number in the
// given array.

// var A = [24, 53, 78, 91, 12];
// var smallest = A[0];

// for(var i = 1; i < A.length; i++)
// if(A[i] < smallest){
//     smallest = A[i];
// }
//  console.log("The smallest number is: " + smallest);

//10. Write a program to print multiples of 5 ranging 1 to 100

// for (var i = 1; i <= 100; i++) {
//   if (i % 5 === 0) {
//     document.write(i); 
//     if(i<100); document.write (",");  
//   }
// }
