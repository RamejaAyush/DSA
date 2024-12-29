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

const mergeLists = (
  left: ListNode | null,
  right: ListNode | null
): ListNode | null => {
  const head: ListNode | null = new ListNode(-1);
  let tail: ListNode | null = head;

  while (left && right) {
    if (left.val < right.val) {
      tail.next = left;
      const next: ListNode | null = left.next;
      left.next = null;
      tail = left;
      left = next;
    } else {
      tail.next = right;
      const next: ListNode | null = right.next;
      right.next = null;
      tail = right;
      right = next;
    }
  }

  if (left) tail.next = left;
  if (right) tail.next = right;

  return head.next;
};

const mergeKLists = (
  lists: Array<ListNode | null>,
  left: number = 0,
  right: number = lists.length - 1
): ListNode | null => {
  if (left > right) return null;
  if (left === right) return lists[left];

  const middle: number = Math.floor((left + right) / 2);
  const leftPart: ListNode | null = mergeKLists(lists, left, middle);
  const rightPart: ListNode | null = mergeKLists(lists, middle + 1, right);

  return mergeLists(leftPart, rightPart);
};
