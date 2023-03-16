const solu = (prices) => {
  var profit = 0
  var p1 = prices[0]

  for (var p2 = 0; p2 < prices.length; p2++) {
    p1 = Math.min(p1, prices[p2])
    console.log(`p1: ${p1}, curr: ${prices[p2]}`)
    profit = Math.max(prices[p2] - p1, profit)
    console.log("profit", profit)
  }

  return profit
}

solu([7, 1, 5, 3, 6, 4])
