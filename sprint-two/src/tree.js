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
  //console.log('Tree value:', this.value);
  //console.log('Target:', target);
  var contained = false;
  if (this.value === target) {
    //console.log('Was here');
    contained = true;
  } else { 
    for (var i = 0; i < this.children.length; i++) {
      //console.log('node:', this.children[i]);
      var isContained = this.children[i].contains(target);
   
      if (isContained) {
        contained = true;
      }
    }
  }


  //var targetFound = false;
  // _.each(this.children, function(child) {
  //   targetFound = child.contains(target);
  //   //return targetFound;
  // });
  //return targetFound;
  return contained;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
