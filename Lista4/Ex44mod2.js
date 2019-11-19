module.exports = { printTo10 }
let mod1 = require('./Ex44mod1');

function printTo10(num){
    if(num<=10){
        console.log(num);
        mod1.printTo10(num+1);
    }
}