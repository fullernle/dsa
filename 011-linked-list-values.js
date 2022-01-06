// Iterative approach 
// T: O(n), S: O(n)

const linkedListValues = (head) => {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
};


// Recursive approach
// T: O(n), S: O(n)
const linkedListValues = (head) => {
  const result = [];
  fillValues(head, result);
  return result;
};

const fillValues = (head, result) => {
  if (head === null) return;
  result.push(head.val);
  fillValues(head.next, result);
};
