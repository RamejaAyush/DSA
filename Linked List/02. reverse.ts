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

const reverse = (head: ListNode | null): ListNode | null => {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current) {
    const nextTemp: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
};

printList(reverse(createLinkedList([1, 2, 3, 4, 5])));
