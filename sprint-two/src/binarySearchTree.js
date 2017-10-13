var BinarySearchTree = function(value) {
  var BST = Object.create(BinarySearchTreeMethods);
  BST.left = null;
  BST.right = null;
  BST.value = value;

  return BST;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    }
    this.right.insert(value);
  }
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    }
    this.left.insert(value);
  }
};

BinarySearchTreeMethods.contains = function(value) {
  var found = false;

  if (value === this.value) {
    found = true;
  } 
  if (value > this.value) { 
    if (this.right === null) {
      return found;
    }
    var wasFound = this.right.contains(value);
    if (wasFound) {
      found = true;
    }
  }
  if (value < this.value) {
    if (this.left === null) {
      return found;
    }
    var wasFound = this.left.contains(value);
    if (wasFound) {
      found = true;
    }
  } 

  return found;
};

BinarySearchTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);

  if (this.left) {
    this.left.depthFirstLog(cb);
  }

  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions? 
  insert, contains: log(n)
  depthFirstLog: linear
 */
