console.log("???");

function fib(n) {
  const arr = [0, 1];
  let index = 2;
  if (n > 1) {
    while (n - 2 > 0) {
      arr.push(arr[index - 1] + arr[index - 2]);
      index += 1;
      n -= 1;
    }
  }
  return arr;
}

function fibRecurs(n) {
  if (n < 1) {
    return "Enter a valid number";
  } else if (n == 1) {
    return [1];
  } else if (n == 2) {
    return [0, 1];
  } else {
    const fib1 = fibRecurs(n - 1);
    const fib = [...fib1, fibRecurs(n - 1)[n - 3] + fibRecurs(n - 1)[n - 2]];
    return fib;
  }
}
console.log("--------------------------");
console.log(fibRecurs(8));
//[ 0, 1, 1,  2, 3, 5, 8, 13]
