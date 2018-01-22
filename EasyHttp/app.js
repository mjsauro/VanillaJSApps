const http = new easyHTTP;

//GET POSTS
// http.GET('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

//GET SINGLE POST
// http.GET('https://jsonplaceholder.typicode.com/posts/1', function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });



//Create DATA
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

//POST REQUEST
// //CREATE POST
// http.POST('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });


//PUT REQUEST (update)
http.PUT('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post,) {
  if (error) {
    console.log(error);
  } else {
    console.log(post);
  }
});

//DELETE REQUEST

http.DELETE('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
