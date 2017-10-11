var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage.firstIndex = 0;
  storage.lastIndex = 0;

  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.lastIndex] = value;
  this.lastIndex++;
};

queueMethods.dequeue = function() {
  if (this.lastIndex > this.firstIndex) {
    var val = this[this.firstIndex];
    delete this[this.firstIndex];
    this.firstIndex++;
    return val;
  }
};

queueMethods.size = function() {
  return this.lastIndex - this.firstIndex;
};