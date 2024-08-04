const validParentheses = (s: string): boolean => {
  const stack: string[] = [];
  const closingBrackets: Record<string, string> = {
    "]": "[",
    ")": "(",
    "}": "{",
  };

  for (const char of s) {
    if (char in closingBrackets) {
      if (stack.pop() !== closingBrackets[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

const res = validParentheses("()");
console.log(res);
