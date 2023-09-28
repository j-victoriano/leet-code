class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let node1 = new Node(3)
let node2 = new Node(5)
let node3 = new Node(8)
let node4 = new Node(5)
let node5 = new Node(10)
let node6 = new Node(2)
let node7 = new Node(1)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7


let partition = (node, x) => {
    let head = node
    let tail = node

    while (node !== null) {
        let next = node.next
        if (node.value >= x) {
            tail.next = node
            tail = node
        }
        else {
            node.next = head;
            head = node
        }
        node = next;
    }
    tail.next = null
    console.log(head)
    return head
}

let newlist = partition(node1, 5)
let printList = function (a) {
    while (a !== null) {
        console.log(a.value + " ");
        a = a.next
    }
}
printList(newlist);


