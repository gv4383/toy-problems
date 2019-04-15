// My solution
// time complexity: n^2
// space complexity: n

function isPangram(str) {
  // converts str into an array with all lower case letters
  // and no spaces
  let strArr = str
    .toLowerCase()
    .split(' ')
    .join('')
    .split('');

  // creates array with every letter in the alphabet
  let alphArr = [...'abcdefghijklmnopqrstuvwxyz'];

  // iterates over strArr
  for (let i = 0; i < strArr.length; i++) {
    // iterates over alphArr
    for (let j = 0; j < alphArr.length; j++) {
      // if strArr[i] matches a letter in the alphArr,
      // that letter is removed from alphArr
      if (strArr[i] === alphArr[j]) {
        alphArr.splice(j, 1);
      }
    }
  }

  if (alphArr.length > 0) {
    return false;
  } else {
    return true;
  }
}
