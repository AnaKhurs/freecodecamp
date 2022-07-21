//1 Create a Basic JavaScript Object
let dog = {
  name: "dog",
  numLegs: 4,
  };

//2 Use Dot Notation to Access the Properties of an Object
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name)
console.log(dog.numLegs)  

//3 Create a Method on an Object
let dog = {
  name: "Spot",
  numLegs: 4,
sayLegs: function() {return `This dog has ${dog.numLegs} legs.`;}
};

dog.sayLegs();

//4 Make Code More Reusable with the this Keyword
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

//5 Define a Constructor Function
function Dog() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

//6 Use a Constructor to Create Objects
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
const hound = new Dog();

//7 Extend Constructors to Receive Arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

const terrier = new Dog("shavlic", "grey")

//8 Verify an Object's Constructor with instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
const myHouse = new House(2);
myHouse instanceof House;

//9 Understand Own Properties
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

//10 Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");

//11 Iterate Over All Properties
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

//12 Understand the Constructor Property
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

//13 Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
numLegs:4,
eat: function(){
    console.log("nom nom nom");
},
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//14 Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};