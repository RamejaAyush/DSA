const runningSum = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1]
  }

  return nums
}

runningSum([1, 2, 3, 4])
runningSum([1, 1, 1, 1])
