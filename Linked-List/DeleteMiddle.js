const LinkedList = require('../DataStructures/LinkedList')

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let deleteMiddle = (node) => {
    if (node.value == null || node.next == null) {
        return false
    }
    let next = node.next
    node.value = next.value
    node.next = next.next
    return true;
}

let list = new LinkedList()
for (let items of [1,2,3,4,5]){
    list.append(items)
}

list.print()
deleteMiddle(list.head.next.next)
list.print()