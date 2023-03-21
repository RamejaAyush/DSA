const removeBackspace = (str) => {
  const strArr = []

  for (let i = 0; i < str.length; i++) {
    str[i] === "#" ? strArr.pop() : strArr.push(str[i])
  }

  return strArr.join("")
}

const backspaceCompare = (s, t) => {
  const processedS = removeBackspace(s)
  const processedT = removeBackspace(t)

  console.log(s, t, processedS, processedT)
  console.log(processedS === processedT)
  return processedS === processedT
}

backspaceCompare("ab#c", "ad#c")
