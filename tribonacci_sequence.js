// url: https://www.codewars.com/kata/tribonacci-sequence/javascript

// My solution
// time complexity: n
// space complexity: n

function tribonacci(signature, n) {
  let newArr = [];

  if (n === 0) {
    return [];
  }

  // return the number of elements in original array up to n if n <= 3
  if (n > 0 && n <= 3) {
    for (let i = 0; i < n; i++) {
      newArr.push(signature[i]);
    }
  } else if (n > 3) {
    // creates coppy of original array (should have first 3 numbers)
    newArr = signature.map(num => num);
    // starts at index 3 and adds numbers from there
    for (let i = 3; i < n; i++) {
      newArr.push(newArr[i - 1] + newArr[i - 2] + newArr[i - 3]);
    }
  }

  return newArr;
}
