class listNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const list = [5, 4, 3, 2, 1]

const linkedList = list.reduce((val, acc) => new listNode(acc, val), null)

const printList = (head) => {
  if (!head) return

  console.log(head.val)
  printList(head.next)
}

const reverse = (head) => {
  let prev = null
  let current = head

  while (current) {
    let tempNext = current.next
    current.next = prev
    prev = current
    current = tempNext
  }

  return prev
}

printList(linkedList)
console.log("after reverse")
printList(reverse(linkedList))
