// async function hello() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = true;

//   if (!error) {

//     const response = await promise;
//     return response;
//   } else {
//     await Promise.reject(new Error("Some error"));
//   }
// }

// hello()
//   .then(response => console.log(response))
//   .catch(error => console.log(error));

async function getUsers() {
  //await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //only proceed once it is resolved
  const data = await response.json();

  //only proceed once the second promise is resolved
  return data;
}

getUsers()
  .then(users => console.log(users));