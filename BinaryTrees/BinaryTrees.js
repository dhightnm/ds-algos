/* eslint-disable max-classes-per-file */
/* Each node can have no more than 2 children
   Every node to the left are going to be less than parent
   Every node to the right is going to be more than parent */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

// Create new node
// starting at the root
// check if there is a root
// if there is a root, check if the value of the new node is >< val of the root
// if greater
// check to see if there is a node to the right
// if ther is, move to that node and repeat these steps
// if there is not, add that node as the right prop
// if less
// check to see if there is a node to the left
// if there is, move to that node and repeat these steps
// if not, add that node to the left prop

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
