/*
 * Roman to integer converts the string which is a roman number into a integer
 * to approach the solution for the problem we have to create a hashmap which contains the all values.
 * after we need to map over the string and convert the roman number to int and add it.
 * catch is this lead me to a problem which is IV is 4 but it will return 6.
 * So, I will take a pointer which will current ele, and I'll compare the next ele wih current.
 * If the next ele is greater we will subtract the total from the current else I'll add.
 */

const romanToInt = (roman) => {
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let sum = 0

  for (let p1 = 0; p1 < roman.length; p1++) {
    let current = roman[p1],
      next = roman[p1 + 1]

    map[next] > map[current] ? (sum -= map[current]) : (sum += map[current])
  }

  return sum
}

const functionPrograming = (roman) => {
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 },
    sum = 0,
    arr = [...roman]

  arr.map((el, ind) =>
    map[roman[ind + 1]] > map[roman[ind]] ? (sum -= map[el]) : (sum += map[el])
  )

  console.log(sum)
  return sum
}

// romanToInt("IV")
// romanToInt("III")
// romanToInt("LVIII")
// functionPrograming("MCMXCIV")
