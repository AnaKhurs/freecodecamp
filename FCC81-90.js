//81
var myDog = {
    // Only change code below this line
    "name": "Nik",
    "legs": 4,
    "tails": 1,
    "friends": ["Mike", "Ana"]
    
    
    // Only change code above this line
    };

    //82
    // Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  
  var hatValue = testObj.hat;      // Change this line
  var shirtValue = testObj.shirt;    // Change this line

  //83
  // Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  
  var entreeValue = testObj["an entree"];   // Change this line
  var drinkValue = testObj["the drink"];    // Change this line


  //84!!!!!!
  // Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  
  var playerNumber = 16;       // Change this line
  var player = testObj[playerNumber];   // Change this line

  //85
  // Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog["name"] = "Happy Coder";
  // Only change code below this line

  //86
  var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";

//87
// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  delete myDog.tails;
  // Only change code below this line

  //88
  // Setup
function phoneticLookup(val) {
    var result = "";
  
    // Only change code below this line
    var lookup = {
    alpha:"Adams",
    bravo:"Boston",
    charlie:"Chicago",
    delta:"Denver",
    echo:"Easy",
    foxtrot:"Frank"
  }
  
  result = lookup[val];
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");

  //89
  function checkObj(obj, checkProp) {
    // Only change code below this line
   if (obj.hasOwnProperty(checkProp)) {
     return obj[checkProp];
   } else {
  return "Not Found";
   }
    // Only change code above this line
  }