let book = {
    title : "War and Peace",
    price : 20,
    priceWithDiscount : function(discount){
        return this.price*(1 - discount/100);
    },
    get prc(){
        return this.price;
    },
    set prc(newPrice){
        this.price=newPrice
    }
}

book.prc = 23;
console.log(book.prc);
console.log(book.priceWithDiscount(15));
book.priceWithDiscount = function(discount){
    return 0;
}
console.log(book.priceWithDiscount(15));
Object.defineProperty(book,"priceWithDiscount",{
    value : function(discount){
        return this.price*(100 - discount)/100;
    }
});
Object.defineProperty(book,"SpecialPrice",{
    value : 15,
    enumerable : true,
    writable : true
});
console.log(book.priceWithDiscount(15));
Object.defineProperty(book,"prc",{
    get : function(){
        return this.SpecialPrice;
    }
})
console.log(book.prc)