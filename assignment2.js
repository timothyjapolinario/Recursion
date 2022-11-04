function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const [leftArray, rigthArray] = halfArray(arr);
  return [...sortArray(mergeSort(leftArray), mergeSort(rigthArray))];
}

function halfArray(arr) {
  const lengthHalf = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, lengthHalf);
  const rigthArray = arr.slice(lengthHalf);
  return [leftArray, rigthArray];
}
function sortArray(leftArr, rightArr) {
  const sortedArray = [];
  const totalLength = leftArr.length + rightArr.length;
  let sortedLength = 0;
  //[1,2] [3,4,5]
  while (sortedLength < totalLength) {
    const leftVal = leftArr[0];
    const rightVal = rightArr[0];
    if (leftVal && rightVal) {
      if (leftVal < rightVal) {
        sortedArray.push(leftArr.shift());
      } else {
        sortedArray.push(rightArr.shift());
      }
    } else {
      const val = leftVal ? leftArr : rightArr;
      sortedLength += val.length;
      sortedArray.push(...val);
    }
    sortedLength += 1;
  }
  return sortedArray;
}
//console.log(sortArray([1, 2], [3, 4, 5]));
console.log(mergeSort([2, 1, 3, 8, 5, 2, 8]));
