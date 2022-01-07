// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;

  return linkedListFind(head.next, target);
};

// T: O(n), S: O(n)