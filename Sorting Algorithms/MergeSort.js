/*
 * Merge Sort: Divide the list and compare, then merge into a single list and compare, this follow till end.
 * Time Complex: Best, average, worst: O(n logn)
 * Space Complex: O(N)
 */
const mergeSort = (arr) => {
  if (arr.length === 1) return arr

  let arrLen = arr.length
  let middle = Math.floor(arrLen / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  let result = []
  let leftIndx = 0,
    rightIndx = 0

  while (leftIndx < left.length && rightIndx < right.length) {
    if (left[leftIndx] < right[rightIndx]) {
      result.push(left[leftIndx])
      leftIndx++
    } else {
      result.push(right[rightIndx])
      rightIndx++
    }
  }

  return result.concat(left.slice(leftIndx)).concat(right.slice(rightIndx))
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
const answer = mergeSort(numbers)
console.log(answer)
