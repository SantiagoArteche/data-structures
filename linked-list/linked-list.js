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

    let currentLocation = this.head;

    while (currentLocation.next !== null) {
      currentLocation = currentLocation.next;
    }
    currentLocation.next = new Node(val);
  }

  print(head) {
    if (head === null) return;
    console.log(head.val);
    this.print(head.next);
  }

  contains(val) {
    let currentLocation = this.head;
    while (currentLocation !== null) {
      if (currentLocation.val === val) return true;

      currentLocation = currentLocation.next;
    }

    return false;
  }

  sum(head) {
    if (!head) return;
    let sum = 0;
    let curr = head;

    while (curr !== null) {
      sum += curr.val;
      curr = curr.next;
    }
    return sum;
  }

  deleteValue(head, val) {
    if (head.val === val) {
      return head.next;
    }

    let prev = null;
    let curr = head;
    while (curr !== null) {
      if (curr.val === val) {
        prev.next = curr.next;
      }

      prev = curr;
      curr = curr.next;
    }

    return head;
  }
}

const list = new LinkedList();

list.append(1);
list.append(3);
list.append(5);
list.append(9);
list.append(22);
list.append(33);
list.append(44);
list.append(55);
list.append(66);
list.append(77);
list.append(88);
list.append(112);
list.append(151);
list.append(152);
list.append(153);

const newHead = list.deleteValue(list.head, 1);
const bHead = list.deleteValue(list.head, 152);
console.log(list.contains(120));
console.log(list.contains(88));
list.print(newHead);
list.print(bHead);

const sum = list.sum(list.head);
console.log({ sum });
