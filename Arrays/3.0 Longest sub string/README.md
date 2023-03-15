# Approach

- Loop over the first string of the array.
- Taking the first Character of the first string and loop over the rest of the string in array.
- Compating the first Character of the first string with the rest of the string's character, If it matches than we add else break the loop.
<!-- Describe your approach to solving the problem. -->

# Complexity

- Time complexity: O(N\*M)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N) including ans var, else O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (arr) => {
    let ans = ""

    for (let i = 0; i < arr[0].length; i++) {
        let currentChar = arr[0][i],
            isMatching = true // if this is false, for loop will break

        for(let j = 1; j < arr.length; j++) {
            if (currentChar != arr[j][i]) {
                isMatching = false
                break
            }
        }

        if (!isMatching) break // here it will break
        ans += currentChar
    }

    return ans
};
```
