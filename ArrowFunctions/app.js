// const sayHello = function() {
//   console.log("Hello");
// }

// arrow function
// const sayHello = () => {
//   console.log("Hello");
// };

//one line function does not need braces
// const sayHello = () => console.log("Hello");


//one line return
// const sayHello = () => "Hello";


//returning an object literal
// const sayHelloObject = () => (
//   {
//     msg: 'Hello'
//   }
// );

//with parameters
// const sayHello = (name) => console.log(`Hello ${name}`);

const users = ['Matt', 'Lisa', 'Pete'];

// const nameLengths = users.map(function (name) {
//   return name.length;
// });

//shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

//shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);