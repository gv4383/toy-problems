// url: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// My solution
// time complexity: n^2
// space complexity: n

function accum(s) {
  // create an array of each individual letter separated by a '-'
  let strArr = s
    .toUpperCase()
    .split('')
    .join('-')
    .split('');

  let count = s.length;

  // iterate through array
  for (let i = strArr.length - 1; i > 0; i--) {
    if (strArr[i] !== '-') {
      // copy letter at index i, j times up to current count
      for (let j = 1; j < count; j++) {
        strArr.splice(i + 1, 0, strArr[i].toLowerCase());
      }
      // decrement count everytime afterwards
      count -= 1;
    }
  }

  return strArr.join('');
}

// Other solution
// time complexity: n^2
// space complexity: constant

function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}
