const container = (arr) => {
  let maxArea = 0
  let i = 0,
    j = arr.length - 1

  while (i <= j) {
    console.log("entered", arr[i], arr[j], i, j)
    let width = j - i
    let height = Math.max(arr[i], arr[j])
    let currentArea = width * height

    console.log(width, height, currentArea)

    maxArea = Math.max(maxArea, currentArea)
    console.log("maxArea:", maxArea)
    arr[i] <= arr[j] ? i++ : j--
  }

  console.log(maxArea)
  return maxArea
}

container([1, 8, 6, 2, 5, 4, 8, 3, 7])
