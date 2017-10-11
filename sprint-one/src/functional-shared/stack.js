var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.count = 0;
  _.extend(storage, stackMethods);
  
  return storage;  
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.count++;
  this[this.count] = value;
};

stackMethods.pop = function() {
  if (this.count) {
    var val = this[this.count];
    delete this[this.count];
    this.count--;
    return val;
  }
};

stackMethods.size = function() {
  return this.count;
};

// var extend = function(obj, methods) {
//   for (var key in methods) {
//     obj[key] = methods[key];
//   }
// };