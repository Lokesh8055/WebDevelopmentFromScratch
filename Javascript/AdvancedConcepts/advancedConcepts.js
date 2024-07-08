'use strict';

/* currying can be created using two ways - closures and bind method */

// bind

// Closures
// let multiply = function (x) {
//   return function (y) {
//     console.log(x * y);
//   };
// };

// let multiplyTwo = multiply(2);
// multiplyTwo(10);

// let multiplyThree = multiply(3);
// multiplyThree(20);

let printFullName = function (hometown) {
  console.log(`${this.firstName} ${this.lastName} from ${hometown}`);
};

let name = {
  firstName: 'loke',
  lastName: 'pad',
};

printFullName.call(name, 'chennai');

let name2 = {
  firstName: 'pad',
  lastName: 'hello',
};
// Call
printFullName.call(name2, 'mumbai');
// apply
printFullName.apply(name2, ['mumbai']);
// bind
let printName = printFullName.bind(name2, 'hyderabad');
printName();

// bind
let multiply = (x, y) => console.log(x * y);

let multiplyTwo = multiply.bind(this, 2);
multiplyTwo(10);

let multiplyThree = multiply.bind(this, 3);
multiplyThree(20);

// Polyfill for bind
Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let multiplyFour = multiply.myBind(this, 4);
multiplyFour(10);

// SetTimeout + closures
// using let
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// x();

// using var
// function y() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
// }

// y();

// Callback functions
setTimeout(() => {
  console.log('timer');
}, 300);

function one(two) {
  console.log('x');
  two();
}

one(function two() {
  console.log('y');
});

// event listeners with closures

function addEventListeners() {
  let count = 0;
  document
    .getElementById('click')
    .addEventListener('click', function () {
      console.log('Button Clicked', ++count);
    });
}

addEventListeners();

// Promises
const carts = ['shoe', 'cart'];
const validateCart = (cart) => cart.length > 0;

// Creating a promise (Producer)
function createCart(carts) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(carts)) {
      const err = new Error('there are no items in the cart');
      reject(err);
    }
    const orderId = '1234';
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => {
    if (orderId) {
      resolve('Payment successful');
    } else {
      reject('Payment is Invalid');
    }
  });
};

const showOrderSummary = (paymentInfo) => {
  return new Promise((resolve, reject) => {
    const walletBalance = '500 Rs.';
    if (walletBalance) {
      resolve(walletBalance);
    } else {
      reject('issue with summary');
    }
  });
};

const updateWallet = (walletBalance) => {
  return `The balance present is ${walletBalance}`;
};

// Consuming promise (Consumer) Promise chaining
createCart(carts)
  .then((orderId) => orderId)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((walletBalance) => updateWallet(walletBalance))
  .catch((err) => console.log('err', err.message));
