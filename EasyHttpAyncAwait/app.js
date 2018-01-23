const http = new EasyHTTP;
// get users

// http.get("https://jsonplaceholder.typicode.com/users")
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

const data = {
  name: 'Matt Sauro',
  username: 'mjsauro',
  email: 'mjsauro@gmail.com'
};

//create post

// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

//update post

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

//delete post
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(error => console.log(error));