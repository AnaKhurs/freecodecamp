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