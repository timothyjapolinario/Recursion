const LinkedList = function () {
  let size = 0;
  let head = null;
  let tail = null;

  const prepend = function prependNodeToLinkedList(node) {
    size += 1;
    //list is still empty
    if (head === null) {
      head = node;
    } else if (tail === null) {
      tail = node;
      head.nextNode = tail;
      //add new node at start of list
    } else {
      node.nextNode = head;
      head = node;
    }
  };
  const append = function appendNodeToLinkedList(node) {
    size += 1;
    //list is still empty
    if (head === null) {
      head = node;
    } else if (tail === null) {
      tail = node;
      head.nextNode = tail;
      //add new node at end of list
    } else {
      tail.nextNode = node;
      tail = node;
    }
  };

  const getHead = function getCopyOfHead() {
    return { ...head };
  };
  const getTail = function getCopyOfTail() {
    return { ...tail };
  };

  const at = function getNodeAtIndex(n) {
    if (n >= size) {
      console.log("Index out of bounds");
      return;
    }
    let currentNode = head;
    while (n > 0) {
      currentNode = currentNode.nextNode;
      n -= 1;
    }
    return currentNode;
  };

  const pop = function removeLastElementFromList() {
    //get second to the last node
    let n = size - 2;
    let currentNode = head;
    while (n > 0) {
      currentNode = currentNode.nextNode;
      n -= 1;
    }
    tail = currentNode;
  };

  const contains = function checkIfListContains(value) {
    let currentNode = head;
    let n = size - 1;
    while (n > 0) {
      currentNode = currentNode.nextNode;
      n -= 1;
      if (currentNode.value === value) {
        return true;
      }
    }
    return false;
  };

  const find = function findIndexOfNod(value) {
    let currentNode = head;
    let n = size - 1;
    while (n > 0) {
      currentNode = currentNode.nextNode;
      n -= 1;
      if (currentNode.value === value) {
        return n;
      }
    }
    return n;
  };

  const toString = function stringifyTheList() {
    let currentNode = head;
    let n = size - 1;
    let listString = `( ${currentNode.value} )`;
    while (n >= 0) {
      if (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
        listString += `-> ( ${currentNode.value} )`;
      } else {
        listString += `-> ( ${null} )`;
      }

      n -= 1;
    }
    return listString;
  };

  const insertAt = function insertNewValueByIndex(value, index) {
    let currentNode = head;
    let n = 0;
    if (index > size - 1) {
      console.log("Index out of bounds");
      return;
    }
    while (n < size - 1) {
      //if the next node is the target location
      if (n + 1 === index) {
        value.nextNode = currentNode.nextNode;
        currentNode.nextNode = value;
        size += 1;
        return;
      }
      currentNode = currentNode.nextNode;
      n += 1;
    }
  };
  const removeAt = function deleteValueByIndex(index) {
    let currentNode = head;
    let n = 0;
    if (index > size - 1) {
      console.log("Index out of bounds");
      return;
    }
    while (n < size - 1) {
      //if the next node is the target location
      if (n + 1 === index) {
        //console.log(currentNode.nextNode);
        currentNode.nextNode = currentNode.nextNode.nextNode;
        size -= 1;
      }
      currentNode = currentNode.nextNode;
      n += 1;
    }
  };

  return {
    append,
    prepend,
    getHead,
    getTail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

export default LinkedList;
