const validParenteses = (str) => {
  if (str.length === 0) return true
  let stack = []
  let startingBrackets = ["[", "{", "("]

  for (let i = 0; i < str.length; i++) {
    if (startingBrackets.includes(str[i])) {
      stack.push(str[i])
    } else {
      let lastEle = stack.pop()

      if (
        (str[i] == "}" && lastEle == "{") ||
        (str[i] == "]" && lastEle == "[") ||
        (str[i] == ")" && lastEle == "(")
      ) {
        continue
      } else {
        return false
      }
    }
  }

  return stack.length == 0
}

const check = validParenteses("[()]")
console.log(check)
