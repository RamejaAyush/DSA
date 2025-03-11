const twoSumBrute = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j]) return [i, j];
    }
  }

  return [];
};

const twoSum = (nums: number[], target: number): number[] => {
  const map: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const current: number = nums[i];
    const diff: number = target - current;

    if (map.has(diff)) return [map.get(diff)!, i];
    else map.set(current, i);
  }

  return [];
};

const result: number[] = twoSum([2, 7, 9, 11, 13], 11);
console.log(result);
