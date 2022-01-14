// Iterative T: O(n), S: O(1)
const reverseList = (head) => {
	let current = head;
	let prev = null; 
	
	while (current !== null) {
		const next = current.next;
		current.next = prev;
		prev = current;
		current = next; 
	}

	return prev;
}
	
// Recursive T: O(n) S: O(n)
const recursiveReverseList = (head, prev = null) => {
	if (head === null) return prev; 

	const next = head.next;
	head.next = prev; 
	return recursiveReverseList(next, head);
}