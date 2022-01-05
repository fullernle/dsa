const pairProduct = (numbers, targetProduct) => {
  // todo
  const visited = {};

  for (let i = 0; i < numbers.length; i++) {
    const currNum = numbers[i];
    const targetNum = targetProduct / currNum;

    if (targetNum in visited) {
      return [i, visited[targetNum]];
    }

    visited[currNum] = i;
  }

  return [];
};
