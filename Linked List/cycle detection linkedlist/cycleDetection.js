const cycleDetection = (head) => {
  const seenNodes = new Set()
  let currentNode = head

  while (!seenNodes.has(currentNode)) {
    if (currentNode === null) {
      return null
    }
    seenNodes.add(currentNode)
    currentNode = currentNode.next
  }

  return currentNode
}
