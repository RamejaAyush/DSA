const fib = (num) => {
  let n = 0,
    total = 0

  while (n <= num) {
    n++
    total += n
    console.log(n, total)
  }

  return total
}

fib(12)
