class listNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

let arr = [7, 6, 5, 4, 3, 2, 1]

const linkedList = arr.reduce((acc, val) => new listNode(val, acc), null)

const printList = (head) => {
  if (!head) return

  console.log(head.val)
  printList(head.next)
}

const mnTraversal = (head, m, n) => {
  let currentPos = 1,
    currentNode = head,
    start = head

  while (currentPos < m) {
    start = currentNode
    currentNode = currentNode.next
    currentPos++
  }

  let tail = currentNode,
    prev = null

  while (currentPos >= m && currentPos <= n) {
    let next = currentNode.next
    currentNode.next = prev
    prev = currentNode
    currentNode = next
    currentPos++
  }

  start.next = prev
  tail.next = currentNode

  if (m > 1) return head
  else return prev
}

printList(linkedList)
console.log("After Traversal")
printList(mnTraversal(linkedList, 3, 5))
