const evenAndOdd = (num) => {
  let binary = num.toString(2)
  let oddInd = 0,
    evenInd = 0
  console.log(binary)

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 1) {
      console.log(binary[i], i)
      if (i % 2 == 0) evenInd++
      else oddInd++
    }
  }

  console.log([evenInd, oddInd])
  return [evenInd, oddInd]
}

evenAndOdd(17)
