// define API URL
const urlAPI = 'http://localhost/woocommerce-licencekey/';

// get Nonce value
const getNonce = fetch(urlAPI + 'api/get_nonce/?controller=user&method=register',
  {
    method: "GET",
  })
  .then((response) => response.json())
  .then((responseData) => {
    return responseData;
  })
  .catch(error => console.warn(error));

const resultNonce = async () => {
  let nonce = await getNonce;
  return nonce.nonce;
};

// Register User
let data = {
  username: 'testAPIJS',
  email: 'abcxyz@gmail.com',
  insecure: 'cool',
  nonce: '16897b3a0e',
  user_pass: '123123123'
};

var formBody = convertData(data);

const registerUser = fetch(urlAPI + 'api/user/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  body: formBody
})
  .then(response => response.json())
  .then(data => {
    return data;
  })
  .catch((error) => {
    console.log('Error:', error);
  });


// Login User

let dataLogin = {
  cookie: 'abcxyz@gmail.com',
  insecure: 'cool',
};

var bodyLogin = convertData(dataLogin);

const loginUser = fetch(urlAPI + 'api/user/get_currentuserinfo', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  body: bodyLogin
})
  .then(response => response.json())
  .then(data => {
    return data;
  })
  .catch((error) => {
    console.log('Error:', error);
  });


console.log("===================");


function convertData (data) {
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody;
}