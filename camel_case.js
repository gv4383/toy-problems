// My solution
// time complexity: n^2
// space complexity: n

function toCamelCase(str) {
  let strArr = [...str];
  let letter = '';

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === '-' || strArr[i] === '_') {
      letter = strArr[i + 1];
      strArr.splice(i, 2, letter.toUpperCase());
    }
  }

  return strArr.join('');
}
