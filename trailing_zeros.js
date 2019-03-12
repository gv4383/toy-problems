// url: https://www.codewars.com/kata/number-of-trailing-zeros-of-n/javascript

// My solution
// time complexity: log(n)
// space compolexity: constant

function zeros(n) {
  let count = 0;
  let multiple = 5;

  while (Math.trunc(n / multiple) > 0) {
    count += Math.trunc(n / multiple);
    multiple *= 5;
  }

  return count;
}
