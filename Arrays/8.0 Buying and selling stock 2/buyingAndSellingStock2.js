const buyingAndSellingStock2 = (prices) => {
  let buyingDay = prices[0]
  let totalProfit = 0

  for (let i = 0; i < prices.length; i++) {
    buyingDay = Math.min(buyingDay, prices[i])
    console.log(`buyingDay: ${buyingDay}`)
    let profit = prices[i] - buyingDay
    console.log(`profit: ${profit}`)

    if (profit > 0) {
      totalProfit += profit
      buyingDay = prices[i]
      console.log(
        `profit is non zero, Total profit: ${totalProfit}, buying day: ${buyingDay}`
      )
    }
  }

  console.log(`** Resulting total profit: ${totalProfit}`)
  return totalProfit
}

buyingAndSellingStock2([7, 1, 5, 3, 6, 4])
