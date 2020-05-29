//recursion with factorial
function factorial(num) {
    if (num === 1) {
        return num 
    }
    else {
        return num * factorial(num-1);
    }
};

factorial(4);

//constructor for binary search tree

function BST(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

//first method insert function

BST.prototype.insert = function (value){
    if (value <= this.value) {
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value);
    }
    else if (value > this.value) {
        if(!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
};