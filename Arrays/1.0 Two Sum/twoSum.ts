const twoSumBF = (arr: number[], target: number): number[] | null => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }

  return null;
};

const twoSumOP = (arr: number[], target: number): number[] | null => {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let diff = target - current;

    if (map.has(diff)) return [map.get(diff)!, i];

    map.set(current, i);
  }

  return null;
};

const res = twoSumBF([2, 7, 9, 11, 13], 9);
const res2 = twoSumBF([2, 7, 9, 11, 13], 9);
console.log(res, res2);
