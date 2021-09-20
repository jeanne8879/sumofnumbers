function sumFor(lst) {
  let sum = 0;
  for (let i = 0; i < lst.length; i++) {
    sum += lst[i];
  }
  return sum;
}

function sumWhile(lst) {
  let i = 0;
  let sum = 0;
  while (i < lst.length) {
    sum += lst[i];
    i++;
  }
  return sum;
}

function sumRecursion(lst) {
  if (lst.length === 0) {
    return 0;
  }
  const first = lst.shift();
  return first + sumRecursion(lst);
}

function sumTheSimpleWay(lst) {
  return _.reduce(lst, function (memo, num) { return memo + num; }, 0);
}
const testlist = [1, 2, 3, 4];
console.log(sumFor(testlist));
console.log(sumWhile(testlist));
console.log(sumRecursion(testlist));
console.log(sumTheSimpleWay(testlist));
