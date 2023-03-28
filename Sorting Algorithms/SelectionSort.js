/*
 * Selection Sort: Select the min value in the list, place it in the 1st Index.
 * Time Complex: Best, Average, Worst: O(N^2)
 * Space Complex: O(1)
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i
    let temp = arr[i]

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j
      }
    }

    arr[i] = arr[smallest]
    arr[smallest] = temp
  }

  console.log(arr)
  return arr
}

const sortThisArrWithSelectionSort = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

selectionSort(sortThisArrWithSelectionSort)
