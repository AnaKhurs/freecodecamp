//40
// Setup
var myArray = [18,64,99];
myArray[0] = 45;
// Only change code below this line

//41
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2][1];

//42
// Setup
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
// Only change code below this line

//43
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();

//44
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();

//45
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);
// Only change code below this line

//46
var myList = [
    ["Chocolate Bar", 15],
    ["Milk", 1], 
    ["Apple", 5],
    ["Lime", 1],
    ["Cheese", 2],
    ["Strawberry", 8],
    ];


 //47
 function reusableFunction() {
    console.log("Hi World");
  }
  reusableFunction();
  
  
  //48
  function functionWithArgs(a, b) {
    console.log(a + b);
  }
  
  functionWithArgs(1,2);

  //49
  // Declare the myGlobal variable below this line
 var myGlobal = 10;

 function fun1() {
   // Assign 5 to oopsGlobal Here
 oopsGlobal = 5;
 }
 
 // Only change code above this line
 
 function fun2() {
   var output = "";
   if (typeof myGlobal != "undefined") {
     output += "myGlobal: " + myGlobal;
   }
   if (typeof oopsGlobal != "undefined") {
     output += " oopsGlobal: " + oopsGlobal;
   }
   console.log(output);
 }

//50
function myLocalScope() {

  // Only change code below this line
var myVar = "i";
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);