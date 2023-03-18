const removeDuplicates = (arr) => {
  let length = 1

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      arr[length] = arr[i]
      length++
    }
  }

  console.log(arr, length)
  return length
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
