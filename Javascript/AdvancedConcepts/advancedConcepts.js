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
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

x();

// using var
function y() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }
}

y();
