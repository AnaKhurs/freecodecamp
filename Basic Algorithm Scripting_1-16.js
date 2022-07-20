//1 Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = celsius*9/5 +32;
  return fahrenheit;
}

convertCtoF(30);

//2 Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
  }
  
  reverseString("hello");