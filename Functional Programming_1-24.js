//1 Learn About Functional Programming
const prepareTea = () => 'greenTea';
const getTea = (numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(40);

//2 Understand Functional Programming Terminology
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4GreenTeamFCC =  getTea( prepareGreenTea, 27);
const tea4BlackTeamFCC =  getTea(prepareBlackTea, 13);
console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

//3 Understand the Hazards of Using Imperative Code

var Window = function(tabs) {
  this.tabs = tabs;
};
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab');
  return this;
};
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.slice(0, index);
  var tabsAfterIndex = this.tabs.slice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); 
  return this;
 };
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); 
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);
var finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());

  //4 Avoid Mutations and Side Effects Using Functional Programming
let fixedValue = 4;
function incrementer() {
   return fixedValue + 1
}

//5 Pass Arguments to Avoid External Dependence in a Function
let fixedValue = 4;
function incrementer( value) {
  return value +1
}

//6 Refactor Global Variables Out of Functions
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
function add(list, bookName) {
  let newList = [...list, bookName];
  return newList;
}
function remove(list, bookName) {
  return list.filter((l)=>{
    return l!==bookName
  })
}