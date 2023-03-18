const sortedSquares = (nums) => {
  let min = 0,
    max = nums.length - 1,
    newArr = [],
    indx = max

  while (indx > -1) {
    console.log(Math.abs(nums[max]), Math.abs(nums[min]))
    if (Math.abs(nums[max]) > Math.abs(nums[min])) {
      newArr[indx--] = nums[max] * nums[max]
      max--
    } else {
      newArr[indx--] = nums[min] * nums[min]
      min++
    }
  }

  console.log(newArr)
  return newArr
}

sortedSquares([-4, -1, 0, 3, 10])
