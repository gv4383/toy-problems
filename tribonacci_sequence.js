// url: https://www.codewars.com/kata/tribonacci-sequence/javascript

// My solution
// time complexity: n
// space complexity: n

function tribonacci(signature, n) {
  let newArr = [];

  if (n === 0) {
    return [];
  }

  if (n > 0 && n <= 3) {
    for (let i = 0; i < n; i++) {
      newArr.push(signature[i]);
    }
  } else if (n > 3) {
    newArr = signature.map(num => num);
    for (let i = 3; i < n; i++) {
      newArr.push(newArr[i - 1] + newArr[i - 2] + newArr[i - 3]);
    }
  }

  return newArr;
}
