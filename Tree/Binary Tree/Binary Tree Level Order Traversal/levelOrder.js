// Time Complex: O(N)
// Space Complex: O(N)

const levelOrder = (root) => {
  if (!root) return []

  const result = []
  const queue = [root]

  while (queue.length) {
    const currentLevelVal = []
    let currentQueueLen = queue.length,
      count = 0

    while (count < currentQueueLen) {
      let currentNode = queue.shift()
      currentLevelVal.push(currentNode.val)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }

      if (currentNode.right) {
        queue.push(currentNode.right)
      }
      count++
    }
    result.push(currentLevelVal)
  }

  return result
}
