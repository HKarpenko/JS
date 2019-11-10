function createGenerator {
    var _state = 0;
    return {
        next : function() {
            return {
                    value : _state,
                    done : _state++ >= n
                }
            }
        }
}

var foo1 = {
    [Symbol.iterator] : createGenerator
};
    
for ( var f of foo1 )
    console.log(f);
    