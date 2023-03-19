const threeSum = (nums) => {
  const sortArr = nums.sort((a, b) => a - b)
  const triplets = []

  for (let a = 0; a < sortArr.length - 2; a++) {
    if (a === 0 || (a > 0 && sortArr[a] != sortArr[a - 1])) {
      let low = a + 1,
        high = sortArr.length - 1,
        sum = 0 - sortArr[a]

      while (low < high) {
        if (sortArr[low] + sortArr[high] === sum) {
          const triplet = [sortArr[a], sortArr[low], sortArr[high]]
          triplets.push(triplet)

          while (low < high && sortArr[low] === sortArr[low + 1]) low++
          while (low < high && sortArr[high] === sortArr[high - 1]) high--

          low++
          high--
        } else if (sortArr[low] + sortArr[high] < sum) low++
        else high--
      }
    }
  }

  console.log(triplets)
  return triplets
}

threeSum([-2, -1, -1, -2, 0, 2, 1, 1, 0, 2])
threeSum([-1, 0, 1, 2, -1, -4])
threeSum([0, 1, 1])
threeSum([0, 0, 0])
