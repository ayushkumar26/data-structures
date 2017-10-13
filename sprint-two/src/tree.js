var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {

  var contained = false;
  if (this.value === target) {

    contained = true;
  } else { 
    for (var i = 0; i < this.children.length; i++) {

      var isContained = this.children[i].contains(target);
      //save recursion calls into variables
      if (isContained) {
        contained = true;
      }
    }
  }
  return contained;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
