/*
 * Insertion Sort: Compare values for two values, starts from 0th and 1st ind. compare it to the rest of list. and insert the min values at first index.
 * Time Complex: Best: O(N) & Average, Worst: O(N^2)
 * Space Complex: O(1)
 */
const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      } else {
        break
      }
    }
  }

  console.log(arr)
  return arr
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
insertionSort(numbers)
