const LinkedList = require('../DataStructures/LinkedList')

let kFromLast = (list, k) => {
    let p1 = list.head;
    let p2 = list.head;

    for(let i = 0; i < k; i++) {
        if(p1 === null) return null;
        p1 = p1.next;
    }

    while(p1 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}

let list = new LinkedList();
for (let items of [1,2,3,4,5,6]){
    list.append(items);
}

console.log(kFromLast(list, 2))
console.log(kFromLast(list, 1))
console.log(kFromLast(list, 3))
console.log(kFromLast(list, 5))