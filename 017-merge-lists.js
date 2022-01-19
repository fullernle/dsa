const mergeLists = (head1, head2) => {
  // todo
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  let current1 = head1;
  let current2 = head2;
  let lesser = null;

  if (current1.val < current2.val) {
    lesser = current1;
    current1 = current1.next;
  } else {
    lesser = current2;
    current2 = current2.next;
  }

  lesser.next = mergeLists(current1, current2);

  return lesser;
};

// Iterative approach 
const mergeLists = (head1, head2) => {
  let dummyHead = new Node(null);
  let tail = dummyHead;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return dummyHead.next;
};