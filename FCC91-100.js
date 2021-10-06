//91
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = undefined;

gloveBoxContents = myStorage.car.inside["glove box"];

//92 
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = "";

secondTree = myPlants[1].list[1];

//93


//94
// Setup
var myArray = [];
var i = 5;
while(i <= 5 && i >= 0) {
 myArray.push(i);
 i--;
}
// Only change code below this line

//95
// Setup
var myArray = [];
for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}
// Only change code below this line

//96
// Setup
var myArray = [];
for (var i = 1; i <= 9; i += 2) {
  myArray.push(i);
}
// Only change code below this line

//97
// Setup
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
// Only change code below this line

//98
// Setup
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Only change code below this line

//99
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
for (var i = 0; i < arr.length; i++){
  for (var j = 0; j < arr[i].length; j++) {
    product = product * arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);