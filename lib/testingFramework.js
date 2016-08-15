function assert() {

}

assert.prototype.isTrue = function(assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
  }
};

// assert.prototype.isEqual = function(value, func) {
//   if (value === ) {
//     throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
//   }
// };

function It(func) {


  this.func = func;
}

It.prototype.isEqual = function(value) {
  return this.func === value
}

function Describe(description, func) {
  return func;
}
