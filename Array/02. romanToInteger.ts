const romanToInt = (str: string): number => {
  let result: number = 0;
  let previousValue: number = 0;
  const romanToIntegerMapping: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = str.length - 1; i >= 0; i--) {
    const currentValue: number = romanToIntegerMapping[str[i]];

    if (currentValue < previousValue) result -= currentValue;
    else result += currentValue;

    previousValue = currentValue;
  }

  return result;
};

const example: number = romanToInt("III");
console.log(example);
