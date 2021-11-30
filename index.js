//start up server + serve up web page

var http = require('http');

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);

//PART 1 - have i been pwned
app.get('/add', function(req, res){

// check if compromised passwords
const { dataClasses, search } = require('hibp');

var enteredAccount = req.query.email;
var myapikey = 'c0b447304b8c45e985ccd54b9eb44fa0';

search(enteredAccount, { apiKey: myapikey })
  .then((data) => {
    if (data.breaches || data.pastes) {
      
      console.log(data);
      const myJSON = JSON.stringify(data.breaches);
      var fs = require('fs');
      fs.writeFile("breachaccounts.json", myJSON, function(err) { //json first as a work around because API won't allow access to browser without ES6 modules
        if (err) {
          console.log(err);
        }
      });

    } else {
      // no breaches
      console.log('No account breaches detected.');
    }
  })
  .catch((err) => {
    // Something went wrong.
    console.log(err.message);
  });

  // console.log('Name: ', req.query.firstName);
  // console.log('email: ', req.query.email);

  // PART 2 - port scan
const Evilscan = require('evilscan');

RebeccaIP = '137.83.123.21'

const options = {
    target:RebeccaIP,
    port:'7,9,13,21-23,25-26,37,79-81,88,106,110-111,113,119,135,139,143-144,179,199,389,427,443-445,465,513-515,543-544,548,554,587,631,646,873,990,993,995,1025-1029,1110,1433,1720,1723,1755,1900,2000-2001,2049,2121,2717,3000,3128,3306,3389,3986,4899,5000,5009,5051,5060,5101,5190,5357,5432,5631,5666,5800,5900,6000-6001,6646,7070,8000,8008-8009,8080-8081,8443,8888,9100,9999-10000,32768,49152-49157',
    status:'O', 
    //geo:true
    //banner:false
};

const evilscan = new Evilscan(options);
//app.get('/', (req, res)=> {
  
  evilscan.on('result',data1 => {
    //res.send("Open ports: " + data1);  
    console.log(data1);
//})
});

evilscan.on('error', err => {
    throw new Error(data1.toString());
});

evilscan.on('done', () => {
});

evilscan.run();

//PART 3 - network scan

const netList = require('network-list');

netList.scanEach({}, (err, obj) => {
    for (const [key, value] of Object.entries(obj)){
        if (value == true) {
            //console.log(`${key}: ${value}`);
            console.log(obj);
        }
    }
    //console.log(obj); // device object
});
 
  var responsehtml = "";
  responsehtml += `<p class="display-8"> Hi ${req.query.firstName}, your attack surface is being reviewed! </p>`;
  //responsehtml += `<p class="display-1"> Hi ${obj} </p>`;
  //responsehtml += `<p> Your compromised passwords are on the following accounts: </p>`; 
  res.send(responsehtml);
  //res.send(callHIBP(req.query.email);
})