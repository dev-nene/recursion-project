function mergeSort(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [...arr];

  let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  let res = [];
  let i = 0;
  let j = 0;
    
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      res.push(left[i]);
      i += 1;
    } else {
      res.push(right[j]);
      j += 1;
    }
  }
  while (i < left.length) {
    res.push(left[i]);
    i += 1;
  }
  while (j < right.length) {
    res.push(right[j]);
    j += 1;
  }
  return res;
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
