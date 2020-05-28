function LinkedList() {
this.head = null;
this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next  = next;
    this.prev  = prev;
}

var LL = new LinkedList();

console.log(LL);

var node1 = new Node(100, 'node2', null);

console.log(node1);
