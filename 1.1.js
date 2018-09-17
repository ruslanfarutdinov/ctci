// If no data structures allowed:
function uniqueChars(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }

  for (let i = 0; i < str.lenght; i += 1) {
    for (let j = i + 1; j < str.lenght; j += 1) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}
// Space complexity: O(1)
// Time complexity: O(n^2) --> b/c the nested for loop produces the following pattern: (n-1) + (n-2)
// + (n-3) + ... + 2 + 1 operations. This can be written as 1 + 2 + 3 + ... + (n-1), which is a sum
// of 1 through (n-1). We know that the sum of 1 through n is (n(n + 1)) / 2, and therefore the sum
// of 1 through (n-1) is (n(n-1)) / 2, b/c (n(n + 1)) / 2 - n is (n(n - 1)) / 2.

// If data structures are allowed:
function uniqueCharsDS(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }

  const chars = {};
  for (let i = 0; i < str.length; i += 1) {
    if (chars[str[i]]) {
      return false;
    }
    chars[str[i]] = 1;
  }
  return true;
}
// Space complexity: O(n), since in the worst case there are dups and you create n new keys in obj
// Time complexity: O(n)
