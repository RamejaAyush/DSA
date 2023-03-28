const array = [5, 3, 1, 6, 4, 2]
const kToFind = 4

const swap = function (array, i, j) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

const getPartition = function (arr, left, right) {
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

const quickSelect = function (nums, left, right, indexToFind) {
  const partitionIndex = getPartition(nums, left, right)

  if (partitionIndex === indexToFind) {
    return nums[partitionIndex]
  } else if (indexToFind < partitionIndex) {
    return quickSelect(nums, left, partitionIndex - 1, indexToFind)
  } else {
    return quickSelect(nums, partitionIndex + 1, right, indexToFind)
  }
}

var findKthLargest = function (nums, k) {
  const indexToFind = nums.length - k

  return quickSelect(nums, 0, nums.length - 1, indexToFind)
}

console.log(findKthLargest(array, kToFind))
