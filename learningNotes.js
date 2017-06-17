// ABOUT BIND
this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX () { return this.x; }
};

console.log(module.getX()); // 81

var retrieveX = module.getX;
console.log(retrieveX());
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81

// JSX
// You need to capitalize the initial name of component!
// Use {} to refer javascript variable in JSX