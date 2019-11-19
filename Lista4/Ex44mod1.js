module.exports = { printTo10 }
let mod2 = require('./Ex44mod2');

function printTo10(num){
    if(num<=10){
        console.log(num);
        mod2.printTo10(num+1);
    }
}