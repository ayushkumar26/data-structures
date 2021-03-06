

// Instantiate a new graph
var Graph = function() {
  this.nodeList = {};
  this.edgeList = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList[node] = node;
  this.edgeList[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodeList.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodeList[node];
  while (this.edgeList[node].length) {
    this.removeEdge(node, this.edgeList[node][0]);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.edgeList[fromNode].length; i++) {
    var edge = this.edgeList[fromNode][i];
    if (edge === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  this.edgeList[fromNode].push(toNode);
  this.edgeList[toNode].push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var indexFrom = this.edgeList[fromNode] ? this.edgeList[fromNode].indexOf(toNode) : -1; 
  var indexTo = this.edgeList[toNode] ? this.edgeList[toNode].indexOf(fromNode) : -1;

  if (indexFrom > -1) {
    this.edgeList[fromNode].splice(indexFrom, 1);
    this.edgeList[toNode].splice(indexTo, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodeList) {
    cb(this.nodeList[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  constant: addNode, contains, addEdge
  linear: removeNode, hasEdge, removeEdge, forEachNode
 */


