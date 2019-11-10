function fibIt(num){
    var fib1=0;
    var fib2=1;
    if(num==0)
        return fib1;
    if(num==1)
        return fib2;
    for(var i=2;i<=num;i++){
        fib2+=fib1;
        fib1=fib2-fib1;
    }
    return fib2;
}

function fibRec(num){
    if(num==0)
        return 0;
    if(num==1)
        return 1;
    return fibRec(num-1)+fibRec(num-2);
}

function fibMem(n) {
    var cache = {};
    function mem(n) {
        if ( n in cache )
            return cache[n]
        else {
            if(n==0)
                return 0;
            if(n==1)
                return 1;
            var result = mem(n-1)+mem(n-2);
            cache[n] = result;
            return result;
        }
    }
    return mem(n);
}

for(i=10;i<=42;i++){
    console.log(i+":");
    console.time('ItMeth');
    fibIt(i);
    console.timeEnd('ItMeth');
    console.time('RecMeth');
    fibRec(i);
    console.timeEnd('RecMeth');
    console.time('MemoizeMeth');
    fibMem(i);
    console.timeEnd('MemoizeMeth');
}