// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
     return [endNum];
    } else {
  const s = rangeOfNumbers(startNum, endNum - 1);
  s.push(endNum);
  return s;
    } 
  };