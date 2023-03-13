// ! Brute Force
/*
 * to approach this problem, I'm using two pointer technique to find the sum and checking if that is equal to the target
 */
const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j]

      if (target === sum) {
        console.log([i, j])
        return [i, j]
      }
    }
  }
  return null
}

// twoSum([2, 7, 11, 15], 9)
// twoSum([3, 2, 4], 6)
