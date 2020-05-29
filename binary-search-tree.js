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
    else if (value < this.value) {
        if (!this.left) return false;
        else return this.left.contains(value)
    }
    else if (value > this.value) {
        if (!this.right) return false;
        else return this.right.contains(value)
    }
};

//depth first traversel method with recursion

BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
    if (order === 'pre-order') iteratorFunc(this.value);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'in-order') iteratorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if (order === 'post-order') iteratorFunc(this.value);
};

//breadth first traversal method

BST.prototype.breadthFirstTraversal = function(iteratorFunc){
    var queue = [this];
    while(queue.length) {
        var treeNode = queue.shift();
        iteratorFunc(treeNode);
        if (treeNode.left) queue.push(treeNode.left);
        if (treeNode.right) queue.push(treeNode.right);
    }

};


//Create and insert values
var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

bst.depthFirstTraversal(log, 'post-order');

function log(value) {
    console.log(value);
};