// This code is performing Quick Sort. This code is not optimized
const quickSort = (arr, left, right) => {
  console.log(
    `Quick Sort initiated, Arr: ${arr}, left: ${left}, right: ${right}`
  )
  if (left < right) {
    let partitionIdx = partition(arr, left, right)
    console.log(`PartitionIdx: ${partitionIdx}`)
    quickSort(arr, left, partitionIdx - 1)
    quickSort(arr, partitionIdx + 1, right)
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
  console.log(`swap happened: ${arr[i]} & ${arr[j]}`)
}

const kthLargestEle = (arr, k) => {
  let indexToFind = arr.length - k
  console.log(`index to find: ${indexToFind}, arr: ${arr}`)
  quickSort(arr, 0, arr.length - 1)

  console.log(`*** Final answer : ${arr[indexToFind]} ***`)
  return arr[indexToFind]
}

kthLargestEle([3, 2, 1, 5, 6, 4], 2)
