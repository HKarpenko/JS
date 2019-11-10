let sum = function(...args){
    suma = 0;
    for(i=0;i<arguments.length;i++)
        suma+=arguments[i];
    return suma;
}

console.log(sum(1,2,3,4,56))