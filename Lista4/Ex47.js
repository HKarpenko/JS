let readline = require('readline');
let fs = require('fs');

function processFile(path){
    let userRequests = new Map([]);
    let rl = readline.createInterface({
    input: fs.createReadStream(path)
    });
    return new Promise( (res, rej) => { rl.on('line', (line) => {
        var datas = line.split(" ");
        if(userRequests.has(datas[1]))
            userRequests.set(datas[1], userRequests.get(datas[1])+1);
        else
            userRequests.set(datas[1], 1);
        res(userRequests);
        })
    } );
}

processFile('httpData.txt')
    .then(dataMap => {
        let highs = [];
        for(pare of dataMap){
            if(highs.length<3)
                highs.push(pare);
            else
                for(i=0;i<highs.length;i++){
                    if(highs[i][1]<pare[1])
                        highs[i]=pare;
                }
        }
        for(high of highs)
            console.log(high[0]+" "+high[1]);
    })
