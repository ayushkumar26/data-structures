// FIFO

var Queue = function() {
  var someInstance = {};
  var firstIndex = 0;
  var lastIndex = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastIndex] = value;
    lastIndex++; 
  };

  someInstance.dequeue = function() {
    if (lastIndex > firstIndex) {
      var val = storage[firstIndex];
      delete storage[firstIndex];
      firstIndex++;
      return val;
    }
  };

  someInstance.size = function() {
    return lastIndex - firstIndex;
  };

  return someInstance;
};
