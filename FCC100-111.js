//101
function randomFraction() {

    // Only change code below this line
  
    return Math.random();
  
    // Only change code above this line
  }

  //102
  function randomWholeNum() {

    // Only change code below this line
  
    return Math.floor(Math.random() * 10);
  }


  //103
  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }

  //104
  function convertToInteger(str) {
    return parseInt(str);
    }
    
    convertToInteger("56");

    //105
    function convertToInteger(str) {
        return parseInt(str, 2);
        }
        
        convertToInteger("10011");