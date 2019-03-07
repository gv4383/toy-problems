// url: https://www.codewars.com/kata/52fba66badcd10859f00097e

// My solution
// time complexity: n
// space complexity: n

function disemvowel(str) {
  strArr = str.split('');

  for (let i = strArr.length - 1; i >= 0; i--) {
    if (
      strArr[i] === 'a' ||
      strArr[i] === 'A' ||
      strArr[i] === 'e' ||
      strArr[i] === 'E' ||
      strArr[i] === 'i' ||
      strArr[i] === 'I' ||
      strArr[i] === 'o' ||
      strArr[i] === 'O' ||
      strArr[i] === 'u' ||
      strArr[i] === 'U'
    ) {
      strArr.splice(i, 1);
    }
  }

  return strArr.join('');
}

// Other solution
// time complexity: n
// space complexity: constant

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
