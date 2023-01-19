console.log("Welcome to JavaScript!");

const data = new Date();

console.log(data);

//Javascript display possibilities;

//(1) console.log("Umar");

//(2) alert("Umar");

//(3)const name = document.getElementById("name");
//name.innerHTML = "Umar";

//(4) document.write("Umar");

//A program is a list of programming statements;

let x, y, z; //statement 1;

x = 5; //statement 2;
y = 6;
z = x + y;

console.log(z);

//Javascript Syntax;
//syntax is the set of rules for writing programs in a language;

let a;
let b;
let c;
a = 5;
b = 6;
c = a + b;

console.log(c);

//JavaScript Expressions;

let appliedToAll = 2;

let ageNow = 12 * appliedToAll + 5;

console.log(ageNow);

//JavaScript Variables;

console.log(carName);
var carName = "Ford";

let sum = 0;

sum += 9;

console.log(sum);

const num1 = 6;
const num2 = 6;

let findSum = function () {
  const num1 = 9;
  const num2 = 7;
  return num1 + num2 + " sum upto " + num1 + num2;
};

console.log("type of function is", typeof findSum);
console.log("type of null is", typeof null);
console.log("result of null === null", null === null);

function findSum2() {
  if (true) {
    var country = "Pakistan";
  }
  console.log(country);
  return num1 + num2;
}

console.log(findSum());
console.log(findSum2());

let cars = ["Saab", "Volvo", "BMW", "Mwrcedes", "Bently"];
let cars2 = ["Toyota", "Honda", "alto"];
console.log([...cars, ...cars2]);

//JavaScript objects;
console.log("****JavaScript Objects****");

const object1 = {
  userName: "Umar",
  phone: +923162058631,
  address: "21 st, westwood verginia",
  sayName: function () {
    return `My name is ${this.userName} and i live at ${this.address}`;
  },
};

console.log("Name and address:", object1.sayName());

for (let key in object1) {
  console.log(object1[key]);
}

//Strings in JavaScript;
console.log("****JavaScript Strings****");

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log("value at index 0", text[0]);

let sentence = "My name is Umar";
console.log(text.toLowerCase());

console.log("trimed sentence", sentence.slice(5));

let strToArray = sentence.split(" ");
console.log("Character code at", text.charCodeAt(25) - 96);
console.log(strToArray);

console.log(text.length);

let intro = "My name is facebook";

// let newIntro = intro.replace("facebook", "Umar");

// console.log(newIntro);

console.log("index of name is ", intro.indexOf("name"));
console.log("sentence starts with My?", intro.startsWith("My"));

//JavaScript numbers;
console.log("****JavaScript Numbers****");

let numStr = "2345";

console.log(typeof numStr);
console.log(typeof Number(numStr));

//javaScript Arrays;
console.log("****JavaScript Arrays****");

let ArrayOfObjects = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
  {
    color: "green",
    type: "school bus",
    registration: new Date("2019-03-03"),
    capacity: 35,
  },
];

ArrayOfObjects.forEach((car) => console.log(car?.registration));

const firstArray = ["ford", "BMW", "Mercedes", "Bently"];

console.log(typeof firstArray);
console.log(firstArray);

//JavaScript Array methods;
console.log("****JavaScript Array methods****");

let fruits = ["Apple", "Banana", "Pomegrenate", "Grapes"];

let arrToString = fruits.toString();
console.log("This is the strigified form of fruits array: ", arrToString);

const fruits1 = [3, 4, 5, 6, 1, 9, 8, 11];
let fruits1Sorted = fruits1.sort(function (a, b) {
  return a - b;
});
console.log("Fruits1 array sorted", fruits1Sorted);

//Array iterations;
console.log("****Array iteration method****");

// let numbers = [45, 4, 9, 16, 25];

// let newNumbers = numbers.map((value) => value*2);

// console.log(newNumbers);

// let filtered = numbers.filter((value, index, array) => value >= 18);
// console.log(filtered);

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log("All over 18 by every method: ", allOver18);

//Working with dates in JavaScript;
console.log("****Working with dates in JavaScript");

const d = new Date();
console.log(d.getDay(), d.getMonth(), d.getFullYear());

//Math object in JavaScript;
console.log("****JavaScript Math object****");

const random = Math.random();
console.log(random);

//Math comparison;
console.log("****Math comparison operator****");
const age = 19;
let result = age >= 18 ? "Allowed to vote" : "Not old enough";
console.log(result);

//JavaScript comparisons;
console.log("****JavaScript comparisons****");

let userName = "Umar";
let nullText = null;

console.log(nullText ?? userName);

//Switch statement in JavaScript;
console.log("****Switch statement in JavaScript****");

let day;
let val = 10;
switch (val) {
  case 5:
    day = "value >= 5";
    break;
  case 10:
    day = "value >= 10";
    break;
  case 15:
    day = "value >=15";
    break;
  case 20:
    day = "value >=20";
    break;
  case 25:
    day = "value >=25";
    break;
  case 30:
    day = "value >=30";
    break;
  case 35:
    day = "value >=35";
    break;
}

console.log("Today is " + day);

//JavaScript sets;
console.log("****JavaScript sets****");

let removeDuplicates = [2, 3, 4, 5, 6, 7, 3, 4];

const alphabets = new Set(removeDuplicates);
alphabets.forEach((letter) => console.log(letter));

//JavaScript Maps;
console.log("****Maps in JavaScript****");
const fruitsMap = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

// fruitsMap.set("apples", 500);
// fruitsMap.set("bananas", 300);
// fruitsMap.set("oranges", 200);
fruitsMap.set("watermelon", 100);
const oranges = fruitsMap.get("oranges");
console.log(oranges);

console.log(fruitsMap);

fruitsMap.forEach((fruit) => console.log(fruit));

let textToBeSearchedForRegex = "Visit W3School for more details and my name is Umar";
let indexOfw3School = textToBeSearchedForRegex.search(/umar/i);
console.log(indexOfw3School);