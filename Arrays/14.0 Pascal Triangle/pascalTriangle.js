const pascal = (n) => {
  let triangle = [[1]]

  for (let i = 1; i < n; i++) {
    let currentNode = [1]

    for (let j = 1; j < i; j++) {
      currentNode[j] = triangle[i - 1][j] + triangle[i - 1][j - 1]
    }
    currentNode.push(1)
    console.log(currentNode)
    triangle.push(currentNode)
  }

  console.log(triangle)
  return triangle
}

pascal(5)
