

// Instantiate a new graph
var Graph = function() {
  //need nodes
  //need edges
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
  if (this.nodeList.hasOwnProperty(node)) {
    return true;
  }
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  console.log('node:', node);
  delete this.nodeList[node];
  
  for (var i = 0; i < this.edgeList.length; i++) {
    var index = this.edgeList[i] ? this.edgeList[i].indexOf(node) : -1;
    console.log('Other lists before splice:', this.edgeList[i]);
    console.log('index:', index);
    if (index >= 0) {
      this.edgeList[i].splice(index, 1);
    }
    console.log('Other lists after splice:', this.edgeList[i]);

  }
  this.edgeList.splice(node, 1);
  console.log('Edge list of node:', this.edgeList[node]);
  

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
  //console.log('fromNode edgeList:', this.edgeList[fromNode]);


};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {


  var indexFrom = this.edgeList[fromNode] ? this.edgeList[fromNode].indexOf(toNode) : -1; 
  var indexTo = this.edgeList[toNode] ? this.edgeList[toNode].indexOf(fromNode) : -1;

  if (indexFrom > -1) {
    this.edgeList[fromNode].splice(indexFrom, 1);
  }

  if (indexTo > -1) {
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
 */


