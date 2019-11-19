var Node = function(left, right, value){
    this.left = left;
    this.right = right;
    this.value = value;
    this[Symbol.iterator] = function*(){
        let recBypass = function*(root){
            if(root.left !== null)
                yield* recBypass(root.left);
            yield root.value;
            if(root.right !== null)
                yield* recBypass(root.right);
        }
        yield* recBypass(this);
    }
}

Node.prototype.show = function(){
    let res = "(";
    if(this.left !== null)
        res+=this.left.show()+", ";
    else
        res+="null, ";
    if(this.right !== null)
        res+=this.right.show()+", ";
    else
        res+="null, ";
    res+=this.value.toString()+")";
    return res;
}

let tree = new Node(new Node(new Node(null, null, 1), null, 2), null, 3);
console.log(tree.show());

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

for ( var e of tree ){
    console.log( e );
}

    