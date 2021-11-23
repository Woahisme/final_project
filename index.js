
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
var app     = express();

app.get('/', function(req,res){
   console.log(':)), Server New Hit: ' + timeStamp())
   res.send(':)), Server New Hit yall: ' + timeStamp());
});

function timeStamp(){
   var currentdate = new Date();
   var prettyTime = currentdate.getHours() + ":" +
               currentdate.getMinutes() + ":" +
               currentdate.getSeconds();
   return prettyTime;               
}

var port = 3000;
app.listen(port,function(){
   console.log('Listening on port:' + port);
});
