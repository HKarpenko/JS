function naturalMultEach(ToNumber){
    let result = [];
    for(var i=1;i<=ToNumber;i++){
        var strNum = i.toString();
        var sumEach = 0;
        var flag=false;
        for(j=0;j<strNum.length;j++){
            if(i % parseInt(strNum.charAt(j)) != 0){
                flag=true;
                break;
            }
            sumEach+=Number(strNum.charAt(j));
        }
        if(flag || i % sumEach != 0)
            continue;
        result.push(i);
    }
    return result;
}

let arr = naturalMultEach(100_000);
for(i=0;i<arr.length;i++)
    console.log(arr[i]);