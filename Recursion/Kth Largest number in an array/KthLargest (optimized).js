const array = [5, 3, 1, 6, 4, 2]
const kToFind = 4

const quickSelect = (arr, left, right, indexToFind) => {
  let partitionIdx = partition(arr, left, right)

  if (partitionIdx === indexToFind) {
    return arr[partitionIdx]
  } else if (indexToFind < partitionIdx) {
    return quickSelect(arr, left, partitionIdx - 1, indexToFind)
  } else {
    return quickSelect(arr, partitionIdx + 1, right, indexToFind)
  }
}

const partition = (arr, left, right) => {
  let pivot = arr[right]
  let partitionIdx = left

  console.log(`Doing Partition, pivot: ${pivot}`)

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, partitionIdx, j)
      partitionIdx++
    }
  }
  swap(arr, partitionIdx, right)
  console.log(`Done with partition, arr: ${arr}, partitionIdx: ${partitionIdx}`)
  return partitionIdx
}

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const kthLargestEle = (arr, k) => {
  let indexToFind = arr.length - k

  return quickSelect(arr, 0, arr.length - 1, indexToFind)
}

console.log(kthLargestEle(array, kToFind))
