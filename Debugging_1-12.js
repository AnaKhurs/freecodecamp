//1 Use the JavaScript Console to Check the Value of a Variable
let a = 5;
let b = 1;
a++;
// Only change code below this line

console.log(a);
let sumAB = a + b;
console.log(sumAB);

//2 Understanding the Differences between the freeCodeCamp and Browser Console
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output)
console.clear()

//3 Use typeof to Check the Type of a Variable
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven);
console.log(typeof three);

//4 Catch Misspelled Variable and Function Names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

//5 Catch Unclosed Parentheses, Brackets, Braces and Quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//6 Catch Mixed Usage of Single and Double Quotes
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

//7 Catch Use of Assignment Operator Instead of Equality Operator
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);