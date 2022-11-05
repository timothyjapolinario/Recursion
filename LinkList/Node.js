const nodeInterface = () => ({
  type: "nodeInterface",
});
const Node = function (value) {
  const state = {
    value,
    nextNode: null,
  };
  return Object.assign(Object.create(nodeInterface()), state);
};
export default Node;
