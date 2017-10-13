

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit); 
  var tuple = [];
  tuple[0] = k;
  tuple[1] = v;
 
  if (!(this._storage.get(index))) { 
    var bucket = []; 
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    this._storage.get(index).push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var returnValue;
  _.each(this._storage.get(index), function(tuple) {  
    if (tuple[0] === k) {
      returnValue = tuple[1];
    }
  });
  return returnValue;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleIndex;

  _.each(this._storage.get(index), function(tuple, index) {

    if (tuple[0] === k) {
      tupleIndex = index;
    } 
  });
  this._storage.get(index).splice(tupleIndex, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
  constant: insert, retrieve, remove 
 */


