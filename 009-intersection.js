const intersection = (a, b) => {
  // todo
  const result = [];
  const setA = new Set(a);
  for (let el of b) {
    if (setA.has(el)) {
      result.push(el);
    }
  }

  return result;
};
