class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

const createLinkedList = (list: number[]): ListNode | null => {
  if (list.length === 0) return null;

  const head: ListNode | null = new ListNode(list[0]);
  let current: ListNode | null = head;

  for (let i = 1; i < list.length; i++) {
    const newNode: ListNode | null = new ListNode(list[i]);
    current.next = newNode;
    current = newNode;
  }

  return head;
};

const printList = (head: ListNode | null): void => {
  if (!head) return;
  console.log(head.val);
  printList(head.next);
};

const removeNth = (head: ListNode | null, n: number): ListNode | null => {
  const dummyHead: ListNode | null = new ListNode(-1);
  dummyHead.next = head;

  let slow: ListNode | null = dummyHead;
  let fast: ListNode | null = dummyHead;

  for (let i = 0; i < n; i++) {
    if (fast) fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow?.next!;
  }

  slow.next = slow.next!.next;

  return dummyHead.next;
};

printList(removeNth(createLinkedList([1, 2, 3, 4, 5]), 2));
