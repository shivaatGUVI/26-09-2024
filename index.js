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

let arrayOne = [1, 2, 3, 4, 5];

let arrayTwo = [6, 7, 8, 9];

// [1, 2, 3, 4, 5, 6, 7, 8, 9];

// spread - unbox

let newArray = [...arrayOne, ...arrayTwo];
console.log(newArray);
