// Use Recursion to Create a Countdown
// Only change code below this line
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const s = countdown(n - 1);
      s.unshift(n);
      return s;
    }
    return;
  }
  // Only change code above this line