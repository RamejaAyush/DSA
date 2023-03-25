class listNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const arr = [5, 4, 3, 2, 1]

const linkedList = arr.reduce((acc, val) => new listNode(val, acc), null)

const printList = (head) => {
  if (!head) return

  console.log(head.val)
  printList(head.next)
}

printList(linkedList)
