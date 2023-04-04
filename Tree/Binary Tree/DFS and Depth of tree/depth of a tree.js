const depthTree = (root, count = 0) => {
  if (!root) return count

  count++
  return Math.max(depthTree(root.left, count), depthTree(root.right, count))
}

// space complex: O(N)
// Time complex: O(N)
