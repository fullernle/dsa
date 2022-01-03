// 001 - max-value

/*
Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty.
*/

const maxValue = (nums) => {
  // todo
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > max) max = num;
  }

  return max;
};

// Time Complexity: O(n)
// Space Complexity: O(1);