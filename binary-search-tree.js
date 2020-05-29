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