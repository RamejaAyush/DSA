const longestCommonPrefix = (arr) => {
  let ans = ""

  for (let i = 0; i < arr[1].length; i++) {
    let char = arr[1][i],
      isMatching = true

    for (let j = 1; j < arr.length; j++) {
      if (char != arr[j][i]) {
        isMatching = false
        break
      }
    }

    if (!isMatching) break
    ans += char
  }

  console.log(ans)
  return ans
}

longestCommonPrefix(["Flower", "Flow", "Flight"])
