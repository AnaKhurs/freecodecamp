//51
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();

//52
function timesFive(num) {
    return num * 5;
  }

  //53
  // Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}

// Only change code above this line

addThree();
addFive();

//54
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
// Only change code below this line

//55
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var item = arr.shift();
  return item;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//56
function welcomeToBooleans() {

  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

//57

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue) {
  return "Yes, that was true";
}
return "No, that was false";

  // Only change code above this line

}

//58
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//59
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//60
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");