const compress = (string) => {
  // todo
  let i = 0;
  let j = 0;
  let res = "";

  while (j <= string.length) {
		let char1 = string[i];
		let char2 = string[j];
		
    if (string[i] === string[j]) {
      j += 1;
    } else {
      const length = j - i;

      if (length > 1) {
        res += length + string[i];
      } else {
        res += string[i];
      }

      i = j;
    }
  }

  return res;
};

// Time: O(n)
// Space: O(n)