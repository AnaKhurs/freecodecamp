//1 Palindrome Checker
function palindrome(str) {
    str = str.toLowerCase().replace(/(\W)|(\_)/g,"").split("");
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 -i]) {
            return false;
        }
    }
    return true;
}
palindrome("eye");

//2 Roman Numeral Converter
function convertToRoman(num) {
   let roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let str = '';
  
    for (let i of Object.keys(roman)) {
      let q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
  
    return str;
  }

//3 Caesars Cipher
function rot13(str) {
  let astr=[];
  let character;
  let charCode;
  str.split(" ");
  for (let i = 0; i<str.length;i++){
  for(let j = 0; j<str[i].length;j++){
  if(str[i].charCodeAt(j)>=65 && str[i].charCodeAt(j)<=90){
  charCode = str[i].charCodeAt(j) - 65 + 13;
  charCode = (charCode%26)+65;
  }else{
  charCode=str[i].charCodeAt(j);
  }
  character = String.fromCharCode(charCode);
  astr.push(character);
  }
  }
  return astr.join('');
  }
  rot13("SERR PBQR PNZC");  

//4 Telephone Number Validator
let re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
function telephoneCheck(str) {
  return re.test(str);
}
telephoneCheck("555-555-5555");

//5 Cash Register
var denom = [
	{ name: 'ONE HUNDRED', val: 100},
	{ name: 'TWENTY', val: 20},
	{ name: 'TEN', val: 10},
	{ name: 'FIVE', val: 5},
	{ name: 'ONE', val: 1},
	{ name: 'QUARTER', val: 0.25},
	{ name: 'DIME', val: 0.1},
	{ name: 'NICKEL', val: 0.05},
	{ name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
 let output = {status: null, change: []};
 let change = cash - price;
 let register = cid.reduce(function(acc, curr) {
 acc.total += curr[1];
 acc[curr[0]] = curr[1];
 return acc;
 }, {total: 0});
 if(register.total === change) {
 output.status = 'CLOSED';
 output.change = cid;
 return output;
 }
 if(register.total < change) {
 output.status = 'INSUFFICIENT_FUNDS';
 return output;
 }
 let change_arr = denom.reduce(function(acc, curr) {
 let value = 0;
 while(register[curr.name] > 0 && change >= curr.val) {
 change -= curr.val;
 register[curr.name] -= curr.val;
 value += curr.val;
 change = Math.round(change * 100) / 100;
 }
 if(value > 0) {
 acc.push([ curr.name, value ]);
 }
 return acc;
 }, []);
 if(change_arr.length < 1 || change > 0) {
 output.status = 'INSUFFICIENT_FUNDS';
 return output;
 }
 output.status = 'OPEN';
 output.change = change_arr;
 return output;
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

//6 Truncate a String
let truncateString = (str, num) => str.length > num ? str.slice(0, num) + "..." : str;

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));

//7 Finders Keepers
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

//8 Boo who
function booWho(bool) {
  let booly = typeof bool; //typeof tells you what type of object whatever follows it is
  console.log(bool, booly);
  if (booly == "boolean"){
  return true;
}
  else {
    return false;
  }
    }
booWho(true);

//9 Title Case a Sentence
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

//10 Slice and Splice
function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    result.splice(n+i, 0, arr1[i]);
  }
  return result;
}

frankenSplice([1, 2, 3], [4, 5], 1);

//11 Falsy Bouncer
function bouncer(arr) {
  let check = arr.filter(function(i) {
    return Boolean(i);
  });
  return check;
}
bouncer([7, "ate", "", false, 9]);

//12 Where do I Belong
function getIndexToIns(arr, num) {
  if(arr.indexOf(num) === -1) {
    arr.push(num);
  }
  let newArr = arr;
  function sortNumber(a,b) {
    return a - b;
  }
  newArr.sort(sortNumber);
  return newArr.indexOf(num);
}
getIndexToIns([3, 10, 5], 3);

//13 Mutations
function mutation(arr) {
  let y = [arr[0].toLowerCase(),arr[1].toLowerCase()];
  let x = y[1].split("");
  let ver;
  for (let i=0;i<x.length;i++){
   if (y[0].indexOf(x[i])>=0){
     ver=true;
   }else if(y[0].indexOf(x[i])<0){
     ver=false;
     break;
   }
  }
  switch(ver){
    case true:
      return true;
      
    case false:
      return false;    
  }
}
mutation(["floor", "for"]);