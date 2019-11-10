function fib() {
    var fib0 = 0;
    var fib1 = 1;
    return {
        next : function() {
            return {
                    value : fib1,
                    done : (function(){
                                fib1 = fib0 + fib1;
                                fib0 = fib1 - fib0;
                                return false;
                            })()
                }
            }
        }
}

function* fibGenerator() {
    var fib0 = 0;
    var fib1 = 1;
    for ( var i=0; ; i++ ) {
        yield fib1;
        fib1 = fib0 + fib1;
        fib0 = fib1 - fib0;
    }
} 

var it1 = fib();
for ( var _result, i=0; _result = it1.next(), !_result.done && i<100;i++ ) {
    console.log( _result.value );
}

var it2 = fibGenerator();
for ( var _result, i=0; _result = it2.next(), !_result.done && i<100; i++ ) {
    console.log( _result.value );
}

var foo = {
    [Symbol.iterator]: fibGenerator
}

for ( var i of foo ) {
    console.log( i );
}
    
