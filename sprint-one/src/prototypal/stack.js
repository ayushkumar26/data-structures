var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  storage.count = 0;
  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count) {
    this.count--;
    var val = this[this.count];
    delete this[this.count];
    //this.count--;
    return val;
  }
};

stackMethods.size = function() {
  return this.count;
};
