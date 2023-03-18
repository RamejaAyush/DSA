const majorityElement = (nums) => {
  let hashmap = {}

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]

    if (current in hashmap) hashmap[current] += 1
    else hashmap[current] = 1

    console.log(hashmap)

    if (hashmap[current] > nums.length / 2) {
      console.log(current)
      return current
    }
  }

  return -1
}

majorityElement([3, 2, 1, 3, 3])
