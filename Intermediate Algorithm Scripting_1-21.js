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