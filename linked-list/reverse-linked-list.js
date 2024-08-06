class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(val);
  }

  print(head) {
    if (!head) return;
    console.log(head.val);
    this.print(head.next);
  }

  reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
      const next = curr.next;

      curr.next = prev;

      prev = curr;
      curr = next;
    }

    return prev;
  }

  reverseRecurseList(curr, prev = null) {
    if (curr === null) return prev;

    const next = curr.next;
    curr.next = prev;

    return this.reverseRecurseList(next, curr);
  }
}

const linkedList = new LinkedList();
linkedList.append(3);
linkedList.append(5);
linkedList.append(9);
linkedList.append(12);
linkedList.print(linkedList.head);
console.log("----");

const reverseList = linkedList.reverseRecurseList(linkedList.head);
linkedList.print(reverseList);
