// fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
//   console.log(res);
// });


//get nonce
fetch('http://localhost:8000/api/get_nonce/?controller=user&method=register').then(res => {
  console.log(res);
});


// const data = { username: 'example' };
//
// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });