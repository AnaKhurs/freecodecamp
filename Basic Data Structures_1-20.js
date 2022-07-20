//1 Use an Array to Store a Collection of Data
let yourArray = ['one', 2, 'three', true, false, undefined, null]; // Change this line

//2 Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "n";
// Only change code above this line
console.log(myArray);

//3 Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
  // Only change code below this line
arr.unshift('I', 2, 'three')
arr.push(7, 'VIII', 9);
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));