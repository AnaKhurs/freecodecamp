//1 Sum All Numbers in a Range
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}
sumAll([1, 4]);

//2 Diff Two Arrays
function diffArray(arr1, arr2) {
  let newArr = [];  
  newArr = arr1.concat(arr2); 
  function checkNum(num) {
    if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
      return num;
    }
  }
  return newArr.filter(checkNum);
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//3 Seek and Destroy
function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);
  args.splice(0,1);
  return arr.filter(function(element){
      return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//4 Wherefore art thou
function whatIsInAName(collection, source) {
  let arr = [];
  let keysToCheck = Object.keys(source);
  arr = collection.filter(function(item) {
     return keysToCheck.every(function(key) {
       return item.hasOwnProperty(key) && item[key] === source[key];
     });
  });
  return arr;
}

//5 Spinal Tap Case
function spinalCase(str) {
  let spacesRegex = /\s+|_+/g;
  let camelRegex = /([a-z])([A-Z])/g;
  str = str.replace(camelRegex, "$1 $2") 
  let spinalStr = str.replace(spacesRegex, "-");
  return spinalStr.toLowerCase();
}
spinalCase("thisIsSpinalTap");

//6 Confirm the Ending
function confirmEnding(str, target) {
  let newStr = '';
  newStr = str.substring(str.length - target.length);
  return newStr === target;
}
confirmEnding("Bastian", "n");


// 7 Pig Latin
function translatePigLatin(str) {
  const regex = /^[^aeiou]+/g;
  const consonants = str.match(regex);
  if (consonants == null) {
    str = str.concat('way');
  }
  else {
    str = str.replace(regex, '').concat(consonants).concat('ay');
  }
  return str;
}

translatePigLatin("consonant");

//8 Search and Replace
function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
      after = after[0].toUpperCase() + after.slice(1);
  } else {
      after = after[0].toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

//9 DNA Pairing
const lookup = Object.create(null);
lookup.A = 'T';
lookup.T = 'A';
lookup.C = 'G';
lookup.G = 'C';
function pairElement(str) {
 return str.split('').map(function(p) {return [p, lookup[p]];});
}
pairElement("GCG");

//10 Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let newStr = '';
  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}
repeatStringNumTimes("abc", 3);

//11 Missing letters
function fearNotLetter(str) {
  let start = str.charCodeAt(0) + 1;
  let missing = ''; 
  for(var i = 1; i < str.length; i++){
    if(str.charCodeAt(i) !== start){
      missing += String.fromCharCode(start);
      start++;
    }
    start ++;
  }
  if(missing == ''){
    missing = undefined;
  }
  return missing;
}
fearNotLetter("pqrt");

//12 Sorted Union
function uniteUnique(arr) {
 let getArgsArr = (args) => {
    let finalList = []
    for (let i in args) {
      finalList.push(args[i])
    }
    return finalList.flat()
  }
  let uniqueArgs = (argsArr) => {
    return argsArr.filter((item, pos) => {
      return argsArr.indexOf(item) === pos; 
    })  
  }
  return uniqueArgs(getArgsArr(arguments))
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// 13 Convert HTML Entities
function convertHTML(str) {
  let regExp = [/&/g, /</g, />/g, /"/g, /'/g];
  let chars = ['&amp;', '&lt;','&gt;','&quot;',"&apos;"];
  for(let i = 0; i < chars.length; i++){
    str = regExp[i][Symbol.replace](str, chars[i]);
  }
  return str;
}
convertHTML("Dolce & Gabbana");

//14 Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let  n = 0;
  let nPlusOne = 1;
  let temp;
  let sum = 0;
  while (n <= num){
    temp = n;
    n = n + nPlusOne; 
    nPlusOne = temp;
    if (nPlusOne % 2 !== 0) {
          sum += nPlusOne;
    }
  }
  return sum;
}
sumFibs(4);

//15 Sum All Primes
function sumPrimes(num) {
  let primes = [false, false];
  for (let i = 2; i <= num; i++) {
    primes[i] = true;
  }
  let limit = Math.sqrt(num);
  for (let j = 2; j < num; j++) {
    if (primes[j] === true) {
      for (let k = j * j; k <= num; k += j) {
        primes[k] = false;
      }
    }
  }
  let primesum = primes.reduce((sum, boo, index) => {
    if (boo === true) {
      return sum + index;
    } else {
      return sum;
    }
  });
  return primesum;
}
sumPrimes(10);

//16 Smallest Common Multiple
function smallestCommons(arr) {
  let max;
  let min;
if (arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    min = arr[0];
    max = arr[1];
  }
let multiple = max;
  for (let i = min; i < max; i++) {
    if (multiple % i !== 0) {
      multiple += max;
      i = min - 1;
    } else if (i === max) {
      return multiple;
    }
  }
  return multiple;
}
smallestCommons([1,5]);

//17 Drop it
function dropElements(arr, func) {
  let myArr=[];
  for (let i=0; i<arr.length; i++) {
    if (func(arr[i])) {
      myArr=arr.slice(i);
      break;
    }
  }
  return myArr;
}
dropElements([1, 2, 3], function(n) {return n < 3; });