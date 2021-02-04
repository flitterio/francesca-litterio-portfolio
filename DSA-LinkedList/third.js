//find where item.next.next.next === null
import SLL from './linked-list';

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

findThirdLast(SLL);