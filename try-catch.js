// try {
//   alertt("This file is running from trycatch.js");
// } catch (error) {
//   console.log(error.message);
// }

// function findValue() {
//   const x = document.getElementById("demo").value;
//   try {
//     if (x.trim() == "") throw "Empty";
//     if (x < 5) throw "Too low";
//     if (x > 10) throw "Too high";
//   } catch (error) {
//     console.log("input value", error);
//   }
// }

let dupObject = {
  x: 3,
  y: 1,
};

let xForThis = this;

console.log(xForThis);

//JavaScript classes;
console.log("****JavaScript classes****");

class Car {
  constructor(name, model) {
    (this.name = name), (this.model = model);
  }
  age() {
    return new Date().getFullYear() - this.model;
  }
}

const car1 = new Car("Ford", 2005);
const car1Age = car1.age();
console.log(car1Age);
console.log(car1.name);

(function IIFE() {
  console.log("This code comes from IIFE");
})();

// const makeWithdraw = (balance) =>
//   ((copyBalance) => {
//     console.log("IIFE")
//     let balance = copyBalance; // This variable is private
//     const doBadThings = () => {
//       console.log("I will do bad things with your money");
//     };
//     doBadThings();
//     return {
//       withdraw(amount) {
//         if (balance >= amount) {
//           balance -= amount;
//           return balance;
//         }
//         return "Insufficient money";
//       },
//     };
//   })(balance);

console.log(strcitTry);

var strcitTry = "Umar";
