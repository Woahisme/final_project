
const express = require('express');
//var cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const { dataClasses, search } = require('hibp');

var enteredAccount = 'rebeccalspiewak@gmail.com';
var myapikey = 'c0b447304b8c45e985ccd54b9eb44fa0';

search(enteredAccount, { apiKey: myapikey })
  .then((data) => {
    if (data.breaches || data.pastes) {
      
      console.log(data);
    } else {
      // no breaches
      console.log('No account breaches detected.');
    }
  })
  .catch((err) => {
    // Something went wrong.
    console.log(err.message);
  });

//app.use(cors());

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var url = "https://haveibeenpwned.com/api/v3/breachedaccount/rebeccalspiewak%40gmail.com?truncateResponse=false";
// var response = new XMLHttpRequest();
// response.open("GET", url);
// response.setRequestHeader("hibp-api-key", "c0b447304b8c45e985ccd54b9eb44fa0");
// response.setRequestHeader("cors", "cors");
// response.setRequestHeader("user-agent", "finalproject");
// response.responseType = "json";
// response.send();


// response.onload = function () {
//   let responseObj = response.response;
//   alert(responseObj.domain); // check
// };



// Begin accessing JSON data here
//var data = JSON.parse(this.response);

// data.forEach(breach => {
//   // Log each domain breach
//   console.log(breach.domain)
// });

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);