

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
  
  //console.log('this.nodeList:', this.nodeList);
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
  console.log('node:', node);
  delete this.nodeList[node];
  
  //var index = this.edgeList[node] ? this.edgeList[node].indexOf(node) : -1;
  //this.edgeList[index].splice(0, this.edgeList[index].length);

  for (var i = 0; i < this.edgeList.length; i++) {
    var index = this.edgeList[i] ? this.edgeList[i].indexOf(node) : -1;
    console.log('Other lists before splice:', this.edgeList[i]);
    console.log('index:', index);
    if (index >= 0) {
      this.edgeList[i].splice(index, 1);
    }
    console.log('Other lists after splice:', this.edgeList[i]);
    //if (this.edgeList[i] !== undefined) {
    // for (var j = 0; j < this.edgeList[i].length; j++) {
    //   if (this.edgeList[i][j] === node) {
    //     this.edgeList[i].splice(this.edgeList[i][j], 1);
    //     console.log('Other edgeLists:', this.edgeList[i]);
    //   }
    // }    
     // this.edgeList[i].splice(0, this.edgeList[i].length);
    //}
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
  // console.log('fromNode:', fromNode);
  // console.log('toNode:', toNode);
  // //this.nodeList.edge = fromNode;
  // this.nodeList['fromNode'] = fromNode;
  // this.nodeList.toNode = toNode;


   // {1: {1: 2}}
   // {1: 1, to: 1, from: 2}
// {1: 1. edge: 2}
   //{1 : edges}
  //console.log(this.edgeList);  
  this.edgeList[fromNode].push(toNode);
  this.edgeList[toNode].push(fromNode);
  //console.log('fromNode edgeList:', this.edgeList[fromNode]);


};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //console.log('edgeList of fromNode:', this.edgeList[fromNode]);
  //console.log('edgeList of toNode:', this.edgeList[toNode]);

  var indexFrom = this.edgeList[fromNode] ? this.edgeList[fromNode].indexOf(toNode) : -1; 
  var indexTo = this.edgeList[toNode] ? this.edgeList[toNode].indexOf(fromNode) : -1;

  if (indexFrom > -1) {
    this.edgeList[fromNode].splice(indexFrom, 1);
  }

  if (indexTo > -1) {
    this.edgeList[toNode].splice(indexTo, 1);
  }

  // for (var i = 0; i < this.edgeList[fromNode]; i++) {
  //   if (this.edgeList[fromNode][i] === toNode) {
  //     this.edgeList[fromNode].splice(this.edgeList[fromNode][i], 1);
  //   } 
  // }
  // for (var i = 0; i < this.edgeList[toNode]; i++) {
  //   if (this.edgeList[toNode][i] === fromNode) {
  //     this.edgeList[toNode].splice(this.edgeList[toNode][i], 1);
  //   } 
  // }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


