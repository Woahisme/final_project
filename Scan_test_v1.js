
//backup code, already incorporated elseware 
// part 1 - port scan
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
evilscan.on('result',data => {
    console.log(data); // 
});

evilscan.on('error', err => {
    throw new Error(data.toString());
});

evilscan.on('done', () => {
});

evilscan.run();

//part 2 - network scan

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


// netList.scan({}, (err, arr) => {
//     //console.log(arr); // array with all devices
//     var res = arr.reduce((acc,item,index) => {
//         acc[`place${index}`] = item;
//         console.log(acc)
        
        //return acc;

        //var hasMatch = false;
        //for (var index = 0; index < acc.length; ++index) {
          //  var id = acc[index]
            //console.log(id);
            
            // if (id.alive == true) {
            //     console.log(id.alve);
            //     i += 1;
            // } else {
            //     i += 1;
            // }
            //break;
           // };

//         });
       
//       //console.log(res);
//     }
// );