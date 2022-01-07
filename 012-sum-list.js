// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const sumList = (head) => {
  if (head === null) return 0;
  return head.val + sumList(head.next);
};

// Iterative solution has better space complexity O(1) vs O(N), both O(N) T.C.
const sumListIterative = (head) => {
	let sum = 0;
	let current = head;

	while (current !== null) {
		sum += current.val;
		current = current.next;
	}

	return sum;
}