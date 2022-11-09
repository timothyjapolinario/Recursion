import Node from "./BSTNode.js";
import Tree from "./Tree.js";
const testNode = Node();
testNode.value = "animal";
const tree = Tree();
const myArray = [50, 70, 30, 20, 40, 60, 80, 75, 36, 34, 75, 85, 32];
const secondArray = [
  1, 7, 22, 11, 4, 100, 102, 23, 8, 6, 9, 4, 3, 5, 7, 9, 67, 6345, 324,
];

const rootNode = tree.buildTree(secondArray);
tree.prettyPrint(rootNode);
console.log(tree.depth(rootNode.leftChild.leftChild));
console.log(tree.isBalanced());
