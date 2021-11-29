var express = require('express');
var app = express();

const path = require('path');
const { dataClasses, search } = require('hibp');

// used to serve static files from public directory
app.use(express.static('public'));

//var enteredAccount = 'rebeccalspiewak@gmail.com';
var myapikey = 'c0b447304b8c45e985ccd54b9eb44fa0';

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// //alt for above
// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve("public", "index.html"));
// });

var port = 3000;
app.listen(port,function(){
console.log('Listening on port:' + port)
});

// haveibeenpwned api call w/ wrapper
function callHIBP(enteredAccount){
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
      // error
      console.log(err.message);
    })
  };

app.get('/add', function(req, res){
  console.log('Name: ', req.query.Name);
  console.log('email: ', req.query.email);

  callHIBP(req.query.email);
  var responsehtml = "";
  responsehtml += `<p class="display-1"> hello ${req.query.Name} </p>`;
  responsehtml += `<p> Your email is: ${req.query.email} </p>`; 
  res.send(responsehtml);
})




// var sqldatabase= require('mysql2');
// var connection = sqldatabase.createConnection({
//   host: 'db-mysql-nyc3-finalproject-do-user-9878515-0.b.db.ondigitalocean.com',
//   port: 25060,
//   user: 'doadmin',
//   password: 'fvzhYipQmeNYDLTz',
//   database: 'defaultdb'
// });

// app.get('/', function(req,res){
//    console.log(':)), Server New Hit: ' + timeStamp())
//    res.send(':)), Server New Hit yall: ' + timeStamp());
// });

// function timeStamp(){
//    var currentdate = new Date();
//    var prettyTime = currentdate.getHours() + ":" +
//                currentdate.getMinutes() + ":" +
//                currentdate.getSeconds();
//    return prettyTime;               
// };


// })
