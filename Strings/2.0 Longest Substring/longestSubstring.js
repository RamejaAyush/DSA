const longestSubString = (s) => {
  let lastSeenCharMap = {}
  let longestSubStr = 0
  let p1 = 0

  for (let p2 = 0; p2 < s.length; p2++) {
    let current = s[p2]
    let lastSeen = lastSeenCharMap[current]

    if (lastSeen >= p1) p1 = lastSeen + 1

    lastSeenCharMap[current] = p2
    longestSubStr = Math.max(longestSubStr, p2 - p1 + 1)
  }

  console.log(longestSubStr)
  return longestSubStr
}

longestSubString("abcabcbb")
