var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null; 
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childNode = Tree(value);
  childNode.parent = this;
  this.children.push(childNode);
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

treeMethods.removeFromParent = function() {
  var childIndex = this.parent.children.indexOf(this);
  this.parent.children.splice(childIndex, 1);
  this.parent = null;
};


/*
 * Complexity: What is the time complexity of the above functions?
  constant: addChild
  linear: contains
 */
