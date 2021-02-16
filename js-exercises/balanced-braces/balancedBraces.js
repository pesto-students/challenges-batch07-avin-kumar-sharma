class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
  // push element into the items
    this.items.push(element);
  }

  pop() {
  // return top most element in the stack, if available
    if (this.items.length === 0) {
      return 'Underflow';
    }
    return this.items.pop();
  }

  isEmpty() {
  // return true if stack is empty
    return this.items.length === 0;
  }
}

function balancedBraces(exp) {
  const stack = new Stack();
  for (let i = 0; i < exp.length; i += 1) {
    const expChar = exp[i];
    if (expChar === '(' || expChar === '{' || expChar === '[') {
      stack.push(expChar);
    } else if (expChar === ')' || expChar === '}' || expChar === ']') {
      const stackChar = stack.pop();
      if (stackChar === 'Underflow') {
        return false;
      }
      switch (stackChar) {
        case '(':
          if (expChar !== ')') {
            return false;
          }
          break;
        case '{':
          if (expChar !== '}') {
            return false;
          }
          break;
        case '[':
          if (expChar !== ']') {
            return false;
          }
          break;
        default:
          break;
      }
    }
  }
  if (stack.isEmpty()) {
    return true;
  }
  return false;
}
export {
  balancedBraces,
};
