/**
 * variables - [name] | function - [] |  block - []
 *
 */

// let name = "GUVI";

// var age = 50;

// const city = true;

// console.log(name, age, city);

/**
 * variables - [name=undefined, age] | functions - []
 *
 */

// console.log(name);
// console.log(age);

// var name = "GUVI";

// let age = 50;

// console.log(name, age);

// variables - [sayHello=undefined] | functions - []

// console.log(sayHello);
// sayHello(); // undefined()

// var sayHello = () => {
//   console.log("Hello");
// };

// sayHello();

// variables - [name=true]

// console.log(name);

// var name = "GUVI";
// console.log(name);

// var name = () => {
//   console.log("Shiva");
// };

// console.log(name);

// var name = true;
// console.log(name);

// let age = 50;

// age = true; // re-assigning
// age = function () {}; // re-assigning
// age = "GUVI"; // re-assigning

// console.log(age);

// let name = "Shiva";
// let age = 23;
// city = "Mumbai";

// let description = "My name is Shiva and my age is 23, I live in Mumbai";
// let description =
//   "My name is" +
//   " " +
//   name +
//   " " +
//   "and my age is" +
//   " " +
//   age +
//   "," +
//   " " +
//   "I live in" +
//   " " +
//   city;

// let description = "My name is Shiva.\n \b My age is 23.\n I live in Mumbai";

// "" ''

// esc

// let description = `My name is ${name}.
// My age is ${age}
// I live in ${city}`;

// console.log(description);

// let array = [1, 2, 3, 4, 5, 6];

// let numberOne = 1;
// let numberTwo = 2;

// let newArray = [3, 4, 5, 6];

// let numberOne = array[0]; //1
// let numberTwo = array[1]; //2

// let newArray = [];

// for (let a = 2; a < array.length; a++) {
//   let currentElement = array[a];
//   newArray.push(currentElement);
// }

// console.log(numberOne, numberTwo, newArray);

// console.log(a, b, c);
// var [a, b, c] = array;

// console.log(array);
// console.log(a, b, c);

// let arrayOne = [100, 200, 300, 400]; // memory address
// let arrayTwo = arrayOne; // memory address

// arrayTwo[0] = 0;

// console.log(arrayOne, arrayTwo);

// function useState(value) {
//   let variable = value;

//   function setVariable(newValue) {
//     variable = newValue;
//     console.log("function callaed");
//   }

//   return [variable, setVariable];
// }

// let [value, setValue] = useState("Shiva");

// console.log(value);
// setValue("GUVI");
// console.log(value);

// console.log(output);

// let object = {
//   name: "GUVI",
//   age: 50,
//   city: "Mumbai",
// };

// let { name, ...newObject } = object;

// let { city, ...newObject2 } = newObject;

// console.log(object);
// console.log(name, newObject);
// console.log(city, newObject2);

// let arrayOne = [1, 2, 3, 4, 5];

// let arrayTwo = [6, 7, 8, 9];

// // [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // spread - unbox

// let newArray = [...arrayOne, ...arrayTwo];
// console.log(newArray);

// variables - [sayHelloArrow] | functions - [sayHello]

// sayHello();

// function sayHello() {
//   console.log("Hello");
// }

// // heavy in operations / taking memory

// sayHello();

// // setTimeout(() => {}, 1000);

// sayHelloArrow();

// let sayHelloArrow = function () {
//   console.log("Helloo");
// };

// setTimeout(sayHelloArrow, 1000);

// function addNumber(paramOne, paramTwo) {
//   console.log(paramOne, paramTwo);
//   //   Array.map
//   console.log(arguments);
//   console.log(Object.values(arguments));
// }

// addNumber(2, 3, 4, 5, 6, 7, 0, 9, 9, 0, 0, 0);

// let addNumberArrow = (paramOne, paramTwo, paramThree) => {
//   console.log(paramOne, paramTwo, paramThree);
// };

// addNumberArrow(2, 3, 4, 7, 8, 9, 90);

// variables - [name="GUVI"] | functions - [sayName - [variables - [name="Shiva"] | functions - []] ] | block - []

// let name = "GUVI";
// // let name = "Shiva";

// // for (let a = 0; a < navigator; a++) {
// //   //peice of code | block of code
// // }

// function sayName() {
//   console.log(myName);
//   var myName = "Shiva";
//   console.log(myName);
// }

// sayName();

// console.log(name);

// console.log(myName);

// variables - [age] | functions - [ variables -[] | functions - []] | block - [abc - variables -[myAge]]
// Global, local, function, block

let age = 50;

// closures -> a function defined inside of a function - the inside is kept private

function father() {
  let myAge = 90;
  console.log(myAge);

  function sayHello() {
    console.log("Hello");
  }

  let abc = () => {
    console.log("hello");
  };
}

console.log(age);
sayHello();
abc();
