function fibs(n) {
  if (n === 0 ) return [0];
  if (n === 1) return [0, 1]
  if (n === 2) return [0, 1, 1]

  let res = [0, 1, 1];

  for (let i = 3; i < n; i++) {
    res.push(res[i-1] + res[i-2]);
  }
  return res;
}

console.log(fibs(8));