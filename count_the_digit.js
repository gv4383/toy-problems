// url: https://www.codewars.com/kata/count-the-digit/javascript

// My solution
// time complexity: n^2
// space complexity: n

function nbDig(n, d) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    let squaredNum = [...String(i ** 2)];

    for (let j = 0; j < squaredNum.length; j++) {
      if (squaredNum[j] == d) {
        count += 1;
      }
    }
  }

  return count;
}
