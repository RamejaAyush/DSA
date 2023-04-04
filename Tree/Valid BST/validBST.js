/**
 * Time Complex: O(N), N is number of nodes
 * Space Complex: O(N), All the node can be a part incase of Skew Tree
 */

/**
 * @param {TreeNode}
 * @param {Int}
 * @param {Int}
 * @return {Boolean}
 */
const DFS = (node, min, max) => {
  if (node.val <= min || node.val >= max) return false // Avoid Duplicates
  if (node.left) if (!DFS(node.left, min, node.val)) return false // If there is any invalid node Left
  if (node.right) if (!DFS(node.right, node.val, max)) return false // Right

  return true
}

/**
 * @param {TreeNode}
 * @return {Boolean}
 */
const validBST = (root) => {
  if (!root) return true

  return DFS(root, -Infinity, Infinity)
}
