const Node = function (val = null) {
  let value = null;
  let leftChild = null;
  let rightChild = null;

  return {
    value,
    leftChild,
    rightChild,
  };
};

export default Node;
