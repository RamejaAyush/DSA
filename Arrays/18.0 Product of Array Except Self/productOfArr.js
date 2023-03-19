const productOfArr = (arr) => {
  let product = 1

  arr.map((el) => {
    product *= el
  })

  console.log(product)

  for (let i = 0; i < arr.length; i++) {
    arr[i] = product / arr[i]

    console.log(product / arr[i])
  }

  console.log(arr)
}

productOfArr([1, 2, 3, 4])
