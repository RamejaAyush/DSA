const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const bracketMap: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const current: string = s[i];

    if (bracketMap[current]) {
      stack.push(bracketMap[current]);
    } else {
      if (stack.length === 0) return false;
      if (stack.pop() !== current) return false;
    }
  }

  return stack.length === 0;
};
