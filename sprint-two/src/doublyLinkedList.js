var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (!list.head) {
      list.head = node;
      list.tail = node;
    } else {
      node.previous = list.tail;
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeTail = function() {
    var oldTail = list.tail.value;
    if (!(list.tail === list.head)) {
      list.tail = list.tail.previous;
      list.tail.next = null;
      return oldTail;
    } else {
      list.tail = null;
      list.head = null;
    }
    return oldTail;
  };

  list.addToHead = function(value) {
    var node = Node(value);
    if (list.head) {
      list.head.previous = node;
      node.next = list.head;
      list.head = node;
    } else {
      list.head = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head.value;
    if (!(list.head === list.tail)) {
      list.head = list.head.next;
      list.head.previous = null;
    } else {
      list.head = null;
      list.tail = null;
    }
    return oldHead;
  };

  list.contains = function(target) {
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
