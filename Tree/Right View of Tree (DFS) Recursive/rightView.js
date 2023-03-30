// uses DFS
// Time Complex: O(N)
// Space Complex: O(N)

const dfs = (node, level, result) => {
  if (!node) return

  if (level >= result.length) {
    result.push(node.val)
  }

  if (node.right) {
    dfs(node.right, level + 1, result)
  }

  if (node.left) {
    dfs(node.left, level + 1, result)
  }
}

const rightView = (root) => {
  let result = []

  dfs(root, 0, result)
  return result
}
