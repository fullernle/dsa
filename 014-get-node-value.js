const getNodeValue = (head, index) => {
	let count = 0;
	let current = head;

	while (current !== null) {
		if (count === index) return current.val;
		current = current.next;
		count += 1;
	}

	return null;
}
// T: O(n), S: O(1)


// Recursive approach
const recursiveNodeValue = (head, index) => {
	if (head === null) return null; 
	if (index === 0) return head.val;

	return recursiveNodeValue(head.next, index - 1);
}
// T: O(n), S: O(n)