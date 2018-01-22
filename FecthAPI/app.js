document.querySelector("#button1").addEventListener('click', getText);
document.querySelector("#button2").addEventListener('click', getJson);
document.querySelector("#button3").addEventListener('click', getExternal);

//get local text file
// function getText() {
//   fetch('test.txt')
//     .then(function (response) {
//       return response.text();
//     })
//     .then(function (data) {
//       document.querySelector("#output").innerHTML = data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

//get local text file with arrow functions
function getText() {
  fetch('test.txt')
    .then(response => response.text())
    .then(data => {
      document.querySelector("#output").innerHTML = data;
    })
    .catch(error => console.log(error));
}


//get local json file
// function getJson() {
//   fetch('posts.json')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function (post) {
//         output +=
//           `
//           <li>${post.title}</li>
//           <p>${post.body}</p>
//           `;
//       });
//       document.querySelector("#output").innerHTML = output;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

//get local json file with arrow functions
function getJson() {
  fetch('posts.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output +=
          `
          <li>${post.title}</li>
          <p>${post.body}</p>
          `;
      });
      document.querySelector("#output").innerHTML = output;
    })
    .catch(error => console.log(error));
}


//get from external api
// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function (user) {
//         output +=
//           `
//           <li>${user.login}</li>
//           `;
//       });
//       document.querySelector("#output").innerHTML = output;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

//get from external api with arrow function
function getExternal() {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function (user) {
        output +=
          `
          <li>${user.login}</li>
          `;
      });
      document.querySelector("#output").innerHTML = output;
    })
    .catch(error => console.log(error));
}