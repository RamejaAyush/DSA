const trappingRainWater = (arr) => {
  let left = 0,
    right = arr.length - 1
  let maxLeft = 0,
    maxRight = 0
  let totalWater = 0

  while (left < right) {
    if (arr[left] < arr[right]) {
      if (arr[left] >= maxLeft) maxLeft = arr[left]
      else totalWater += maxLeft - arr[left]
      left++
    } else {
      if (arr[right] >= maxRight) maxRight = arr[right]
      else totalWater += maxRight - arr[right]
      right--
    }
  }

  console.log(totalWater)
  return totalWater
}

trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
