
// var express = require("express");
// var app = express();

// //var request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://haveibeenpwned.com/api/v2/breachedaccount/rebeccalspiewak@gmail.com', true)

// request.onload = function () {
//   // Begin accessing JSON data here
// }
// app.listen(3000, () => {
//  console.log("Server running on port 3000");
// });


var express = require('express');
var app = express();
var sqldatabase= require('mysql2');
var connection = sqldatabase.createConnection({
  host: 'db-mysql-nyc3-finalproject-do-user-9878515-0.b.db.ondigitalocean.com',
  port: 25060,
  user: 'doadmin',
  password: 'fvzhYipQmeNYDLTz',
  database: 'defaultdb'
});

// used to serve static files from public directory
app.use(express.static('public'));

app.get('/add', function(req, res){
  console.log('firstName: ', req.query.firstName);
  console.log('email: ', req.query.email);
  var responsehtml = "";
  responsehtml += `<p class="display-1"> hello ${req.query.firstName} </p>`;
  responsehtml += `<p> Your email is: ${req.query.email} </p>`; 
  res.send(responsehtml);
})

var port = 3000;
app.listen(port,function(){
console.log('Listening on port:' + port);

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


// });
})
