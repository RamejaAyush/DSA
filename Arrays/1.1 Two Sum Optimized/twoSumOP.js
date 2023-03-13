/*
 * Optimized Two Sum code
 * To approach this solution, I've used hashmap to archive the sol.
 * First, I initialized the hashmap.
 * looping through the nums array.
 * finding the diff, becz target = p1 + p2, so, p2 = target + p1, which is diff.
 * If the diff is in the hashmap, then I will return the diff and the current index that will be the ans.
 * If not I will add it to the hashmap, so, like this diff is the key and index will be the value.
 */

const twoSumOP = (nums, tar) => {
  const hashmap = {}

  for (let p1 = 0; p1 <= nums.length; p1++) {
    let diff = tar - nums[p1]
    if (diff in hashmap) {
      console.log([hashmap[diff], p1])
      return [hashmap[diff], p1]
    }
    hashmap[nums[p1]] = p1
  }

  return []
}

// twoSumOP([2, 7, 11, 15], 13)

/*
 * Space Complex: O(logn)
 * Time Complex: O(n)
 */
