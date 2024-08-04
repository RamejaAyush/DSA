const romanToInt = (roman: string): number => {
  let map: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;

  for (let p1 = 0; p1 < roman.length; p1++) {
    let current = map[roman[p1]];
    let next = map[roman[p1 + 1]];

    if (next && current < next) {
      sum -= current;
    } else {
      sum += current;
    }
  }

  console.log(`Result: ${roman}: ${sum}`);
  return sum;
};

romanToInt("IV");
romanToInt("III");
romanToInt("LVIII");
