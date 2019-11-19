let Foo = function(field){
    this.field = field;
    function Qux() {
        console.log("Qux in Bar");
    }
    this.Bar = function(){
        Qux();
    }
}


let someObj = new Foo(5);
someObj.Bar();
//someObj.Qux(); TypeError: someObj.Qux is not a function