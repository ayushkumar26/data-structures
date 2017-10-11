var Stack = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  //var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    someInstance[count] = value;
  };

  someInstance.pop = function() {
    if (count > 0) {
      var val = someInstance[count];
      delete someInstance[count];
      count--;
      return val;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
