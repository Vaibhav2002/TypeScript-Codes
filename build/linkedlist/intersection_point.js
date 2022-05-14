import { Node } from "./node";
function findIntersectionPoint(l1, l2) {
    var length1 = findLength(l1), length2 = findLength(l2);
    var diff = Math.abs(length1 - length2);
    var temp1 = l1, temp2 = l2;
    if (length1 > length2)
        temp1 = moveNTimes(l1, diff);
    else
        temp2 = moveNTimes(l2, diff);
    while (temp1 != null && temp2 != null && temp1 != temp2) {
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
    return (temp1 == temp2) ? temp1 : null;
}
function findLength(head) {
    if (head == null)
        return 0;
    return 1 + findLength(head.next);
}
function moveNTimes(head, n) {
    while (head != null && n-- > 0)
        head = head.next;
    return head;
}
function main() {
    var l1 = new Node(5);
    l1.next = new Node(7);
    l1.next.next = new Node(10);
    l1.next.next.next = new Node(11);
    l1.next.next.next.next = new Node(15);
    var l2 = new Node(0);
    l2.next = new Node(2);
    l2.next.next = new Node(3);
    l2.next.next.next = l1.next;
    var intersection = findIntersectionPoint(l1, l2);
    console.log((intersection != null) ? intersection.data : null);
}
main();
