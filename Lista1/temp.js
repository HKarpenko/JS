var x = {
    toString: function(){
        return 'x';
    }
}
console.log(x);
x.pole = "pole";
x[2] = "hi";

console.log(Object.keys(x));