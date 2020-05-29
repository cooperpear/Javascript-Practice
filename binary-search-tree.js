//recursion with factorial
function factorial(num) {
    if (num === 1) {
        return num
    }
    else {
        return num * factorial(num - 1);
    }
};

factorial(4);

//constructor for binary search tree

function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

//first method insert function

BST.prototype.insert = function (value) {
    if (value <= this.value) {
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value);
    }
    else if (value > this.value) {
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
};

//contains method

BST.prototype.contains = function (value) {
    if (value === this.value) return true;
    else if (value < this.value){
        if (!this.left) return false;
        else return this.left.contains(value)
    }
    else if (value > this.value){
        if (!this.right) return false;
        else return this.right.contains(value)
    }
};

//Create and insert values
var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(10);
bst.insert(45);
bst.insert(35);
bst.insert(105);
bst.insert(60);
bst.insert(100);
bst.insert(85);
bst.insert(59);

console.log(bst.contains(59));

console.log(bst.left.right.left);