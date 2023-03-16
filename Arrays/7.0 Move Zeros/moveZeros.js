const moveZeros = (nums) => {
  let gap = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) gap++
    else [nums[i - gap], nums[i]] = [nums[i], nums[i - gap]]
  }

  console.log(nums)
}

moveZeros([0, 1, 0, 12, 0, 15])
