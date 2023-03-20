const productOfArr = (arr) => {
  let product = 1

  arr.map((el) => {
    product *= el
  })

  for (let i = 0; i < arr.length; i++) {
    arr[i] = product / arr[i]
  }
}

productOfArr([1, 2, 3, 4])
