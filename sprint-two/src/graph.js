

// Instantiate a new graph
var Graph = function() {
  //need nodes
  //need edges
  this.nodeList = {};
  this.edgeList = [];
};

// var Node = function(value) {
//   var node = {};
//   node.value = value;
//   node.edge = null;

//   return node;
// };

//Need to create a node function for adding nodes to the graph


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList[node] = node;
  //console.log('this.node:', this.nodeList);
  
// this.nodeList.push(node);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodeList.hasOwnProperty(node)) {
    return true;
  }
  return false;

  // if (this.nodeList.includes(node)) {
  //   return true;
  // } 
  // return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodeList[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // console.log('fromNode:', fromNode);
  // console.log('toNode:', toNode);
  // //this.nodeList.edge = fromNode;
  // this.nodeList['fromNode'] = fromNode;
  // this.nodeList.toNode = toNode;


   // {1: {1, 2}}
   // {1: 1, to: 1, from: 2}
// {1: 1. edge: 2}

  var edgeSet = new Set();
  edgeSet.add(fromNode);
  edgeSet.add(toNode);
  console.log(edgeSet.has(5) === true);
  //console.log('edgeSet has toNode:', edgeSet.has(toNode));


};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


