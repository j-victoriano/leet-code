//Remove the duplicates from a single linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
}

let head = new LinkedList();
for (let items of [1,1,2,3,4,4,5,5,5,5,6,7,8,8,1]){
    head.append(items);
}

let removeDuplicates = (list) => {
    const hashset = new Set();
    let curr = list.head;
    let previous = null;
    while (curr != null) {
        if(!hashset.has(curr.value)) {
            hashset.add(curr.value);
            previous = curr;
        }
        else {
            previous.next = curr.next;
        }
        curr = curr.next;
    }
    return hashset;
}

console.log(removeDuplicates(head));