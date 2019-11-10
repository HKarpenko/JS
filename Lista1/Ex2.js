function isPrime(num){
    for(i=2;i<=num/2;i++){
        if(num % i == 0)
            return false;
    }
    return true;
}

function primesTo(ToNumber){
    var result = new Array;
    for(var i=2;i<=ToNumber;i++){
        if(isPrime(i))
            result.push(i);
    }
    return result;
}

let primes = primesTo(200_000);
for(var i=0;i<primes.length;i++)
    console.log(primes[i]);
