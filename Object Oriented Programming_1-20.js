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