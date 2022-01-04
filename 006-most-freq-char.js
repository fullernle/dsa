const mostFrequentChar = (s) => {
  // todo
  const counter = {};

  for (let char of s) {
    if (!counter[char]) {
      counter[char] = 0;
    }

    counter[char] += 1;
  }

  let max = s[0];

  for (let char of s) {
    if (counter[char] > counter[max]) {
      max = char;
    }
  }

  return max;
};

// Time: O(n);
// Space: O(n);