const anagrams = (s1, s2) => {
  // todo
  const counter = {};

  for (let char of s1) {
    if (!counter[char]) {
      counter[char] = 0;
    }
    counter[char] += 1;
  }

  for (let char of s2) {
    if (!counter[char]) {
      counter[char] = 0;
    }
    counter[char] -= 1;
  }

  for (let char in counter) {
    if (counter[char] !== 0) {
      return false;
    }
  }

  return true;
};
