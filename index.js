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

function findSum() {
  const num1 = 9;
  const num2 = 7;
  return num1 + num2 + " sum upto " + num1 + num2;
}

function findSum2() {
    if (true){
        var country = "Pakistan";
    }
    console.log(country)
  return num1 + num2;
}

console.log(findSum());
console.log(findSum2());

let cars = ["Saab", "Volvo", "BMW", "Mwrcedes", "Bently"];
let cars2 = ["Toyota", "Honda", "alto"];
console.log([...cars, ...cars2]);

//JavaScript objects;

const object1 = {
  userName: "Umar",
  phone: +923162058631,
  address: "21 st, westwood verginia",
};

console.log("User Name", object1.userName);

for(let key in object1){
    console.log(object1[key]);
}
