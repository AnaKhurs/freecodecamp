//1
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

//2 Compare Scopes of the var and let KeywordsPassed
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

//3 Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");

//4 Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {

s[0] = 2; 
s[1] = 5; 
s[2] = 7; 
  return s;
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

//5 Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line

Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


// 6 Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date()

// 7 Write Arrow Functions with Parameters
const myConcat =(arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));


//8 Set Default Parameters for Your Functions
// Only change code below this line
const increment = (number , value = 1) => number + value;
// Only change code above this line


//9 Use the Rest Parameter with Function Parameters
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

//10 Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

//11 Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today, tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line

//12 Use Destructuring Assignment to Assign Variables from Objects

//13Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const { today: {low: lowToday, high: highToday} }  = LOCAL_FORECAST

// Only change code above this line

//14 Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// Only change code below this line
 [a,b] = [b,a];

 //15 Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
 const source = [1,2,3,4,5,6,7,8,9,10];
 function removeFirstTwo(list) {
   // Only change code below this line
   const [,,...arr] = list;
   // Only change code above this line
   return arr;
 }
 const arr = removeFirstTwo(source);

 //16 Use Destructuring Assignment to Pass an Object as a Function's Parameters
 const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line


//18 Write Concise Object Literal Declarations Using Object Property ShorthandPassed
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return { name, age, gender };
  // Only change code above this line
};

//19 Write Concise Declarative Functions with ES6
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear (newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//22 Create a Module Script
<html>
  <body>
    <!-- Only change code below this line -->
<script type = "module" src="index.js"></script>
    <!-- Only change code above this line -->
  </body>
</html>

//23 Use export to Share a Code Block
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}

//24 Reuse JavaScript Code Using import
import {uppercaseString, lowercaseString} from "./string_functions.js"
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

//25 Use * to Import Everything from a File
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//26 Create an Export Fallback with export default
export default function subtract(x, y) {
  return x - y;
}

//27 Import a Default Export
import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);

//28 Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {

});

//29 Complete a Promise with resolve and reject
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

//30 Handle a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

//31 Handle a Rejected Promise with catch
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});