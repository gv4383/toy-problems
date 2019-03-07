// url: https://www.codewars.com/kata/578553c3a1b8d5c40300037c

// My solution
// time complexity: n
// space complexity: constant

const binaryArrayToNumber = arr => {
  let place = 0;
  let total = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      total += 0;
    } else {
      total += Math.pow(2, place);
    }
    place += 1;
  }

  return total;
};
