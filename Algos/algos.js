/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
// Find valid anagrams

const isAnagram = (s1, s2) => {
  const map = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    map[char] ? map[char] += 1 : map[char] = 1;
  }
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    if (!map[char]) {
      return false;
    }
    map[char] -= 1;
  }

  return true;
};

console.log(isAnagram('poop', 'poop'));
console.log(isAnagram('poop', 'poopo'));
console.log(isAnagram('poopoop', 'poopoop'));
