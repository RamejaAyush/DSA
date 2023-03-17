const pivotIndex = (nums) => {
  let leftSum = 0,
    rightSum = 0

  nums.forEach((num) => (rightSum += num))

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    rightSum -= current
    if (leftSum === rightSum) return i
    leftSum += current
  }

  return -1
}

const answer = pivotIndex([1, 7, 3, 6, 5, 6])
console.log(answer)
