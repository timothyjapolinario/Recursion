import Node from "./Node.js";
import LinkedList from "./LinkedList.js";

const node1 = Node("first");
const node2 = Node("second");
const node3 = Node("third");
const node4 = Node("fourth");
const nodeItlog = Node("Itlog");
const nodeKamote = Node("Kamote");
const linkedList = LinkedList();

linkedList.append(node2);
linkedList.append(node3);
linkedList.append(nodeItlog);
linkedList.append(node4);
linkedList.prepend(node1);

linkedList.insertAt(nodeKamote, 2);
//console.log(linkedList.toString());
linkedList.removeAt(4);
console.log(linkedList.toString());

//linkedList.head = "dog";
// console.log(linkedList.getTail());
// linkedList.pop();
// console.log(linkedList.getTail());
