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
