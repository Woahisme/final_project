const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);


// const { dataClasses, search } = require('hibp');

// var enteredAccount = 'rebeccalspiewak@gmail.com';
// var myapikey = 'c0b447304b8c45e985ccd54b9eb44fa0';

// search(enteredAccount, { apiKey: myapikey })
//   .then((data) => {
//     if (data.breaches || data.pastes) {
      
//       console.log(data);
//     } else {
//       // no breaches
//       console.log('No account breaches detected.');
//     }
//   })
//   .catch((err) => {

//     console.log(err.message);
//   });