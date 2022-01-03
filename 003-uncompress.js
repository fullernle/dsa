/*
Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>
for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.


*/

const uncompress = (string) => {
  // todo
  let result = [];
	let i = 0
	let j = 0;
  let numbers = "0123456789";

  while (j < string.length) {
		const currentChar = string[j];

    if (numbers.includes(currentChar)) {
      j += 1;
    } else {
      const num = Number(string.slice(i, j));

      for (let count = 0; count < num; count++) {
        result.push(currentChar);
      }

      j += 1;
      i = j;
    }
  }

  return result.join("");
};

// Time: O(n * m) where n is the number of groups and m is the max num found in any group
// Space: O(n*m)