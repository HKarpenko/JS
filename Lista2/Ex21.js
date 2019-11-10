function foo(){
    for(i=0;i<arguments.length;i++){
        console.log(typeof arguments[i])
    }
}

foo(1,'a',{},[]);