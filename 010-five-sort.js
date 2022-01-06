const fiveSort = (nums) => {
  // todo
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[i] === 5 && nums[j] !== 5) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }

    if (nums[j] === 5) {
      j -= 1;
    }

    if (nums[i] !== 5) {
      i += 1;
    }
  }

  return nums;
};

// T: O(n)
// S: O(1)