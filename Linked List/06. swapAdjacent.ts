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
  let current = head;

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

const swapNodes = (head: ListNode | null): ListNode | null => {
  const dummyHead: ListNode | null = new ListNode(-1);
  dummyHead.next = head;

  let prev: ListNode | null = dummyHead;

  while (prev.next !== null && prev.next.next !== null) {
    const first: ListNode | null = prev.next;
    const second: ListNode | null = prev.next.next;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
  }

  return dummyHead.next;
};

printList(swapNodes(createLinkedList([1, 2, 3, 4])));
