'use strict';

module.exports = SinglyLinkedList;

// ----- CLASS DEMO CODE FROM LAB 24 ----- //

function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList(arr) {
  this.head = null;

  if (Array.isArray(arr)) {
    arr.forEach( val => {
      return this.prepend(val);
    });
  }
}

SinglyLinkedList.prototype.prepend = function(val) {
  let node = new Node(val);

  if (!this.head) {
    this.head = node;
    return node.val;
  }

  node.next = this.head;
  this.head = node;
  return node.val;
};

SinglyLinkedList.prototype.append = function(val) {
  let node = new Node(val);
  let lastNode = null;

  if (!this.head) {
    this.head = node;
    return node.val;
  }

  _setLastNode(this.head);
  lastNode.next = node;
  return node.val;

  function _setLastNode(node) {
    if (!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

// ----- MEGAN AND PETER WHITEBOARD CODE FROM LAB 25 ----- //

SinglyLinkedList.prototype.enqueue = function(val) {
  let node = new Node(val); // line added, was above outside this function in our whiteboarded code
  this.append(val); // changed a bit from what we whiteboarded
  node.next = null;
  this.tail = node;
  return node.val;
};

SinglyLinkedList.prototype.dequeue = function() {
  if (this.head) {
    let cur = this.head.next; // added "let", not in whiteboard code
    this.head = cur;
    return cur;
  }
  return null;
};
