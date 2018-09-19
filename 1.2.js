function isPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;

  const chars = {};
  for (let i = 0; i < str1.length; i += 1) {
    chars[str1[i]] ? chars[str1[i]] += 1 : chars[str1[i]] = 1;
  }

  for (let j = 0; j < str2.length; j += 1) {
    if (!chars[str2[j]]) return false;
    chars[str2[j]] -= 1;
    if (chars[str2[j]] < 0) return false;
  }

  return true;
}

// Space complexity: O(n), with n being the length of the 1st str
// Time complexity: O(n), with n being the length of either string (since both are same length)``
