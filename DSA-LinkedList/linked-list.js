

class _Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item){
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while(tempNode.next !== null){
                tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
        }
    }
    find(item) {
        let currNode = this.head;

        if (!this.head){
            return null;
        }

        while (currNode.value !== item) {
            if(currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }

        return currNode;
    }

    remove(item) {
        if (!this.head){
            return null;
        }

        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;

        let previousNode = this.head;

        while((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null){
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    insertBefore(item, nodeWantItToBeBefore){
        if (this.head === null || this.head.next === null && this.head !== nodeWantItToBeBefore) {
            this.insertLast(item);
        }
        else {
            let tempNode = this.head;
            let nextNode = this.head.next;
            while(tempNode.next.value !== nodeWantItToBeBefore){
                    tempNode = tempNode.next;
                    nextNode = nextNode.next;
            }
        tempNode.next = new _Node(item, nextNode); 
        }
    }

    insertAfter(item, nodeToInsertAfter){
        if(this.head === null){
            return  this.insertFirst(item)
        }
        else{
          const currNode = this.find(nodeToInsertAfter);
            currNode.next = new _Node(item, currNode.next.next)
        }

    }

    insertAt(item, position){
        if(this.head === null){
            return this.insertFirst(item)
        }
        else{
        let node = this.head;
        let nextNode = this.head.next;
        if(position === 1){
            this.insertFirst(item)
        }

        for(let i = 2; i < position; i++){
            if(nextNode === null){
                return 'position does not exist'
            }
            node = node.next;
            nextNode = nextNode.next;
        }   
        node.next = new _Node(item, nextNode);
        }
    }

}

function display(list) {
    if (list.head === null) {
        return 'Empty List';
    }
    else {
        let tempNode = list.head;
        let listedList = []
        while(tempNode.next !== null){
            listedList.push(tempNode);
            tempNode = tempNode.next;
    }
    return listedList;
    }
}

function size(list) {
    let count = 0;
    let node = list.head;
    while(node){
        count++;
        node = node.next
    }
    return 'size is: ' + count + ' nodes';
}

function isEmpty(){
    if(this.head === null){
        return 'Empty'
    }
    else {
        return 'Not Empty'
    }
}

function findPrevious(list, item) {
    let currNode = list.head;

    if (!list.head){
        return 'Empty List';
    }

    while (currNode.next.value !== item) {
        if(currNode.next === null) {
            return 'No Previous Item Exists';
        }
        else {
            currNode = currNode.next;
        }
    }

    return 'The Previous Node is: ' + currNode.value;
}

function findLast(list) {
    let currNode = list.head;

    if (!list.head){
        return 'Empty List';
    }

    while (currNode.next !== null) {
            currNode = currNode.next;
    }

    return currNode;
}

function findThirdLast(list) {
    let currNode = list.head;

    if (!list.head){
        return null;
    }

    while (currNode.next.next.next !== null) {
            currNode = currNode.next;
    }

    return currNode;
}

function reverseList(list){
    let prev = null;
    let curr = list.head;
    let nextTemp = null;

    while(curr!== null){
        nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev
}

function middle(list){
    let fast = list.head;
    let slow = list.head;
 
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
 }

 function cycleList(list){
    let slow = list.head;
    let fast = list.head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast){
            return true;
        }
    }
    return false;
}

function main() { 
    const SLL = new LinkedList()
     SLL.insertFirst('Apollo') 
     SLL.insertLast('Boomer') 
     SLL.insertLast('Helo') 
     SLL.insertLast('Husker') 
     SLL.insertLast('Starbuck') 
     SLL.insertLast('Tauhida') 
     SLL.find('Husker') 
     SLL.remove('Husker')


    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')
    SLL.insertAt('Kat', 3);
    SLL.remove('Tauhida')
   // console.log(findLast());
    //console.log(size());
     return SLL;
}

const tempSLL = main();

//console.log(findThirdLast(tempSLL));
 console.log(display(tempSLL));
// console.log(size(tempSLL));
// console.log(isEmpty(tempSLL));
// console.log(findPrevious(tempSLL, 'Athena'));
// console.log(findLast(tempSLL));
//console.log(reverseList(tempSLL));
//console.log(middle(tempSLL));
console.log(cycleList(tempSLL))


// const head = {
//     value: 1, next: node1
// }

// const node1 ={
//     value: 2, next: newNode
// }

// const node2 = {
//     value: 3, next: node3
// }

// const node3 = {
//     value: 4, next: null
// }

// const newNode = {
//     value: 5, next: node2
// }