// url: https://www.codewars.com/kata/split-strings/javascript

// My solution
// time complexity = n
// space complexity = n

function solution(str) {
  let newArr = [];

  if (str.length % 2 !== 0) {
    str += '_';
  }
  let strArr = [...str];

  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(strArr[i] + strArr[i + 1]);
    }
  }

  return newArr;
}
