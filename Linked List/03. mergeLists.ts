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

const mergeListRec = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeListRec(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeListRec(list1, list2.next);
    return list2;
  }
};

const mergeLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  const head: ListNode | null = new ListNode(-1);
  let current: ListNode | null = head;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current?.next;
  }

  if (list1 !== null) current.next = list1;
  if (list2 !== null) current.next = list2;

  return head.next;
};

const list1: ListNode | null = createLinkedList([1, 3, 5]);
const list2: ListNode | null = createLinkedList([2, 4, 6]);
printList(mergeLists(list1, list2));
