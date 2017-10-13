

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  var index = getIndexBelowMaxForKey(k, this._limit); // hash index
  var tuple = [];
  tuple[0] = k;
  tuple[1] = v;
  // Checks if storage has a bucket at that index
  if (!(this._storage.get(index))) { //&& this._storage.get(index)[0].length)) {
    var bucket = []; // holds all tuples
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    this._storage.get(index).push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit); // hash value
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
  // go to bucket, iterate and find tuple
  // find index of tuple and remove it from bucket
  _.each(this._storage.get(index), function(tuple, index) {
     // find index of the tuple (nested)
    if (tuple[0] === k) {
      tupleIndex = index;
    } 
  });
  this._storage.get(index).splice(tupleIndex, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


