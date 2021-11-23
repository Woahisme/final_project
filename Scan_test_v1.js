
const Evilscan = require('evilscan');

RebeccaIP = '137.83.123.21'

const options = {
    target:RebeccaIP,
    port:'21-23, 80',
    status:'TROU', 
    //geo:true
    //banner:false
};

const evilscan = new Evilscan(options);
evilscan.on('result',data => {
    console.log(data); // what will show up for deliverable #1 demo
});

evilscan.on('error', err => {
    throw new Error(data.toString());
});

evilscan.on('done', () => {
});

evilscan.run();