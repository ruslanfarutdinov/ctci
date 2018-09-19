function replaceSpaces(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === ' ') {
      newStr += '%20';
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

// Space complexity: O(1)
// Time complexity: O(n) w/ respect to string length
