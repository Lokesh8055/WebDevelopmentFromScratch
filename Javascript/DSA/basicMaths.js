// const countDigits = (n) => {
//   let count = 0;
//   while (n > 0) {
//     count += 1;
//     n = Math.floor(n / 10);
//   }
//   return count;
// };

// console.log(countDigits(12345));

const reverseNumber = (n) => {
  return Number(n.toString().split('').reverse().join(''));
};

console.log(reverseNumber(12345));

const checkPallindrome = (n) => {
  return reverseNumber(n) === n
    ? 'Palindrome Number'
    : 'Not Palindrome';
};

console.log(checkPallindrome(7789));

const armstrongNumber = (num) => {
  const numbers = num.toString().split('');
  let sum = 0;
  for (let num of numbers) {
    let cube = num * num * num;
    sum += cube;
  }
  return sum == num;
};

console.log(armstrongNumber(371));

const printDivisor = (n) => {
  let arrOfDivisiors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      arrOfDivisiors.push(i);
      if (i !== n / i) {
        arrOfDivisiors.push(n / i);
      }
    }
  }
  return arrOfDivisiors;
};

console.log(printDivisor(10));

const primeNumber = (num) => {
  if (num === 2) return true;

  for (let i = 0; i <= num; i++) {
    if (num[i] % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(primeNumber(3));

// Time Complexity - O(log n(min(a, b)))
const greatestCommonFactor = (n1, n2) => {
  while (n1 > 0 && n2 > 0) {
    if (n1 > n2) {
      n1 = n1 % n2;
    } else {
      n2 = n2 % n1;
    }
  }
  return n1 === 0 ? n2 : n1;
};

console.log(greatestCommonFactor(10, 52));
