const minBrackets = (str) => {
  let strArr = str.split("")
  let stack = []

  for (let p1 = 0; p1 < strArr.length; p1++) {
    if (strArr[p1] === "(") {
      stack.push(p1)
    } else if (strArr[p1] === ")" && stack.length) {
      stack.pop()
    } else if (strArr[p1] === ")") {
      strArr[p1] = ""
    }
  }

  while (stack.length) {
    let lastEle = stack.pop()

    strArr[lastEle] = ""
  }

  console.log(strArr.join(""))
  return strArr.join("")
}

minBrackets("a)bc()fr(")
