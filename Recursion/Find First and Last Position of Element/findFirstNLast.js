const binarySearch = (nums, left, right, tar) => {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let found = nums[mid]

    if (found === tar) return mid
    else if (found < tar) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

const searchRange = (nums, tar) => {
  if (nums.length < 1) return [-1, -1]

  let startingPoint = binarySearch(nums, 0, nums.length - 1, tar)

  if (startingPoint === -1) return [-1, -1]

  let leftP = startingPoint,
    rightP = startingPoint,
    tempL,
    tempR

  while (leftP !== -1) {
    tempL = leftP
    leftP = binarySearch(nums, 0, leftP - 1, tar)
  }

  leftP = tempL

  while (rightP !== -1) {
    tempR = rightP
    rightP = binarySearch(nums, rightP + 1, nums.length - 1, tar)
  }

  rightP = tempR

  return [leftP, rightP]
}
