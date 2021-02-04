//write function to find where next == null, if next = head, return true-- is cycle

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