const pairSum = (numbers, targetSum) => {
  // todo
  const visited = {};

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const targetNum = targetSum - currentNum;

    if (targetNum in visited) {
      return [i, visited[targetNum]];
    }

    visited[currentNum] = i;
  }

  return [];
};
