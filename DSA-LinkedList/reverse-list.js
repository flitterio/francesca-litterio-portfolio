//need pointer to point to previous instead of next... next = previous
//find last node, find previous node, change pointer to previous node
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
};

