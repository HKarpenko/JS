
function fact(n){
    res=1;
    for(i=1;i<=n;i++){
        res*=i;
    }
    return res;
}

for(i=1;i<=100;i++){
    console.log(i+" "+(Math.pow(6,i)*2*Math.pow(10,16))/fact(i));
}