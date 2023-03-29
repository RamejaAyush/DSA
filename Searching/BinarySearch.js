const binarySearch = (nums, tar) => {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
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
