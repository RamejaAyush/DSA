const minBrackets = (str) => {
  let res = str.split("")
  let stack = []

  for (let i = 0; i < res.length; i++) {
    console.log(res[i])
    if (res[i] === "(") {
      console.log("pushed", res[i], i, stack)
      stack.push(i)
    } else if (res[i] === ")" && stack.length) {
      console.log("poped", res[i], i, stack)
      stack.pop()
    } else if (res[i] === ")") {
      console.log("cleared", res[i], i, stack)
      res[i] = ""
    }
  }

  while (stack.length) {
    let current = stack.pop()
    res[current] = ""
    console.log("ending", stack)
  }

  console.log(`*** final sol: ${res.join("")} ***`)
  return res.join("")
}

minBrackets("a)bc(d)")
