import Node from "./BSTNode.js";
const Tree = function () {
  let root = null;

  const buildTree = function (arr) {
    const processedArray = removeDuplicate(arr).sort((a, b) => {
      return a - b;
    });
    root = createBST(processedArray, 0, processedArray.length - 1);
    console.log("----------DONE------------");
    return root;
  };

  const createBST = function (arr, start, end) {
    if (start > end) {
      return null;
    }
    const mid = Math.floor((start + end) / 2);

    const treeRoot = Node();
    treeRoot.value = arr[mid];
    treeRoot.leftChild = createBST(arr, start, mid - 1);
    treeRoot.rightChild = createBST(arr, mid + 1, end);

    return treeRoot;
  };

  const removeDuplicate = function (arr = []) {
    const uniq = [...new Set(arr)];
    return uniq;
  };

  const findNode = function (val, cb) {
    let currentNode = root;
    let nextChild = null;

    while (currentNode !== null) {
      if (val > currentNode.value) {
        nextChild = "rightChild";
      } else if (val < currentNode.value) {
        nextChild = "leftChild";
      }
      if (currentNode[nextChild].value === val) {
        if (cb) {
          cb(currentNode, nextChild);
          return;
        }
        return currentNode[nextChild];
      } else {
        currentNode = currentNode[nextChild];
      }
    }
    return false;
  };

  const deleteNode = function (val) {
    findNode(val, (parent, nodeName) => {
      console.log(parent[nodeName]);
      if (!parent[nodeName]) {
        return;
      }

      //Case 1 where no child
      if (!parent[nodeName].rightChild && !parent[nodeName].leftChild) {
        parent[nodeName] = null;
        return;
      }
      //Case 2 where one child is null
      if (parent[nodeName].rightChild === null) {
        parent[nodeName] = parent[nodeName].leftChild;
        return;
      }
      if (parent[nodeName].leftChild === null) {
        parent[nodeName] = parent[nodeName].rightChild;
        return;
      }

      //case 3 where two children
      let smallestFromRight = parent[nodeName].rightChild;
      while (true) {
        //refer to 80
        if (!smallestFromRight.leftChild.leftChild) {
          parent[nodeName].value = smallestFromRight.leftChild.value;
          smallestFromRight.leftChild = null;
          return;
        }
        smallestFromRight = smallestFromRight.leftChild;
      }
    });
  };

  const insertNode = function (val) {
    let currentNode = root;
    let nodeName = null;
    while (true) {
      if (currentNode.value > val) {
        nodeName = "leftChild";
      } else {
        nodeName = "rightChild";
      }

      if (!currentNode[nodeName]) {
        const newNode = Node(val);
        currentNode[nodeName] = newNode;
        return;
      }
      currentNode = currentNode[nodeName];
    }
  };

  const levelOrder = function (cb) {
    const queue = [root];
    let currentNode = null;
    while (queue.length > 0) {
      currentNode = queue[0];
      if (currentNode.leftChild) {
        queue.push(currentNode.leftChild);
      }
      if (currentNode.rightChild) {
        queue.push(currentNode.rightChild);
      }
      cb(queue[0]);
      queue.shift();
    }
  };

  const preOrder = function (cb) {
    const stack = [];
    let callback = cb;
    let currentNode = root;
    const arr = [];
    if (!cb) {
      callback = (node) => {
        arr.push(node.value);
      };
    }

    while (currentNode || stack.length > 0) {
      while (currentNode !== null) {
        stack.push(currentNode);
        if (currentNode) {
          callback(currentNode);
        }
        currentNode = currentNode.leftChild;
      }

      //cb(currentNode);
      currentNode = stack[stack.length - 1];
      stack.pop();
      currentNode = currentNode.rightChild;
    }
    if (!cb) {
      return arr;
    }
  };

  const inOrder = function () {
    const stack = [];
    let callback = cb;
    let currentNode = root;
    const arr = [];
    if (!cb) {
      callback = (node) => {
        arr.push(node.value);
      };
    }

    while (currentNode || stack.length > 0) {
      while (currentNode !== null) {
        stack.push(currentNode);
        currentNode = currentNode.leftChild;
      }

      //cb(currentNode);
      currentNode = stack[stack.length - 1];
      callback(currentNode);
      stack.pop();
      currentNode = currentNode.rightChild;
    }
    if (!cb) {
      return arr;
    }
  };

  const postOrder = function (cb) {
    const firstStack = [root];
    const secondStack = [];
    let currentNode = null;

    const arr = [];
    while (firstStack.length > 0) {
      currentNode = firstStack[firstStack.length - 1];
      firstStack.pop();
      secondStack.push(currentNode);
      if (currentNode.leftChild) {
        firstStack.push(currentNode.leftChild);
      }
      if (currentNode.rightChild) {
        firstStack.push(currentNode.rightChild);
      }
    }
    if (cb) {
      while (secondStack.length > 0) {
        cb(secondStack.pop());
      }
    }
    return arr;
  };
  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node.rightChild) {
      prettyPrint(
        node.rightChild,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.leftChild) {
      prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  const height = function (node = root) {
    if (node === null) {
      return 0;
    }
    let rightHeight = height(node.rightChild);
    let leftHeight = height(node.leftChild);

    if (rightHeight > leftHeight) {
      return rightHeight + 1;
    } else {
      return leftHeight + 1;
    }
  };
  const depth = function (node) {
    if (node === root) {
      return 0;
    }

    let currentDepth = 0;
    findNode(node.value, (parent) => {
      currentDepth = depth(parent);
    });
    return currentDepth + 1;
  };

  const isBalanced = function () {
    if (Math.abs(height(root.rightChild) - height(root.leftChild)) > 2) {
      return false;
    }
    return true;
  };
  return {
    buildTree,
    prettyPrint,
    deleteNode,
    findNode,
    insertNode,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    height,
    depth,
    isBalanced,
  };
};

export default Tree;
