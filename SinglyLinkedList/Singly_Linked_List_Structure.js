// piece of data - val
//reference to next node - next

/*A data structure that contains a head, tail and length property

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
class Node {
    this.value = value;
    
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")


