var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.firstIndex = 0;
  this.lastIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this[this.lastIndex] = value;
  this.lastIndex++;
};

Queue.prototype.dequeue = function() {
  if (this.lastIndex > this.firstIndex) {
    var val = this[this.firstIndex];
    delete this[this.firstIndex];
    this.firstIndex++;
    return val;
  }
};

Queue.prototype.size = function() {
  return this.lastIndex - this.firstIndex;
};


