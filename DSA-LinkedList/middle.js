//two pointers to get to the middle, the fast pointer moves 2 for ever 1 of the slow pointer
function middle(list){
   let fast = list.head;
   let slow = list.head;

   while (fast && fast.next) {
       slow = slow.next;
       fast = fast.next.next;
   }
   return slow;
}