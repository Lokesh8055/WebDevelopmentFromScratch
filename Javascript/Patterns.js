const rectangularPattern = (num) => {
  let pattern = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      pattern += '*';
    }
    pattern += '\n';
  }
  return pattern;
};

console.log(rectangularPattern(6));

const rightPyramidPattern = (num) => {
  const problem = '*';
  let pattern = '';
  for (let i = 1; i < num; i++) {
    switch (problem) {
      case '*':
        for (let j = 0; j < i; j++) {
          pattern += '*';
        }
        break;
      case 'numberOne':
        for (let j = 1; j < i; j++) {
          pattern += j;
        }
        break;
      case 'numberTwo':
        for (let j = 0; j < i; j++) {
          pattern += i;
        }
        break;
      default:
        return '*';
    }
    pattern += '\n';
  }

  return pattern;
};

console.log(rightPyramidPattern(10));

const invertedRightPyramid = (num) => {
  const problem = 'number';
  let pattern = '';
  for (let i = num; i >= 0; i--) {
    switch (problem) {
      case '*':
        for (let j = 0; j < i; j++) {
          pattern += '*';
        }
        break;
      case 'number':
        for (let j = 1; j < i; j++) {
          pattern += j;
        }
        break;
      default:
        return '*';
    }
    pattern += '\n';
  }
  return pattern;
};

// console.log(invertedRightPyramid(6));

const starPattern = (num) => {
  let pattern = '';
  for (let i = 0; i < num; i++) {
    // Space
    for (let j = 0; j < num - i - 1; j++) {
      pattern += ' ';
    }
    // Star
    for (let j = 0; j < 2 * i + 1; j++) {
      pattern += '*';
    }
    // Space
    for (let j = 0; j < num - i - 1; j++) {
      pattern += ' ';
    }
    pattern += '\n';
  }
  return pattern;
};

console.log(starPattern(6));

const starPatternReverse = (num) => {
  let pattern = '';
  for (let i = 0; i < num; i++) {
    // Space
    for (let j = 0; j < i; j++) {
      pattern += ' ';
    }
    // Star
    for (let j = 0; j < 2 * num - (2 * i + 1); j++) {
      pattern += '*';
    }
    // Space
    for (let j = 0; j < i; j++) {
      pattern += ' ';
    }
    pattern += '\n';
  }
  return pattern;
};

// console.log(starPatternReverse(6));

const diamondPattern = (num) => {
  let patternOne = starPattern(num);
  let patternTwo = starPatternReverse(num);
  return patternOne + patternTwo;
};

// console.log(diamondPattern(6));

const halfDiamondPattern = (n) => {
  let pattern = '';
  for (let i = 0; i < 2 * n - 1; i++) {
    let star = i;
    if (i > n) star = 2 * n - i;
    for (let j = 0; j <= star; j++) {
      pattern += '*';
    }
    pattern += '\n';
  }
  return pattern;
};

// console.log(halfDiamondPattern(3));

const binaryNumberPattern = (n) => {
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) pattern += '1';
      else pattern += 0;
    }
    pattern += '\n';
  }
  return pattern;
};

// console.log(binaryNumberPattern(5));
