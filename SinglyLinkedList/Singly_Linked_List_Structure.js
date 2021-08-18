/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
// piece of data - val
// reference to next node - next

/* A data structure that contains a head, tail and length property

Linked Lists consist of nodes and each node has a value and
a pointer to another node or null value.

-Lists do not have indexes
-Connected via Nodes with the next pointer
-Random access is not allowed (must traverse the list)
-Reason to use linked list is if insertion and deletion are
 important since there is no index reordering.

Length = 4
[head] => [next] => [next] => [tail] => NULL
*/

// A Node stores a piece of data [value] and a reference to the next node

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
}

pop () {
  if (!this.head){
    return undefined;
  }
  var current = this.head;
  var newTail = current;

  while (current.next) {
    newTail = current;
    current = current.next;
  }
  this.tail = newTail;
  this.tail.next = null;
  this.length -= 1;
  return current;
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

const list = new SinglyLinkedList();
list.push('HELLO');
list.push('GOODBYE');
