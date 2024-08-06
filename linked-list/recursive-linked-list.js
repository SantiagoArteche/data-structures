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
    if (!this.head) {
      this.head = new Node(val);
      return;
    }

    this._append(val, this.head);
  }

  _append(val, curr) {
    if (curr.next === null) {
      curr.next = new Node(val);
      return;
    }

    this._append(val, curr.next);
  }

  print(head) {
    if (head === null) return;
    console.log(head.val);
    this.print(head.next);

    // const output = this._print(this.head);
    // console.log(output);
  }

  _print(curr) {
    if (curr === null) return "";
    return `${curr.val}->${this._print(curr.next)}`;
  }

  contains(val) {
    const output = this._contains(val, this.head);
    console.log(output);
  }

  _contains(val, curr) {
    if (curr === null) return false;
    if (curr.val === val) return true;

    return this._contains(val, curr.next);
  }

  sumList(head) {
    if (head === null) return 0;
    return head.val + this.sumList(head.next);
  }

  deleteValue(head, val) {
    if (head.val === val) return head.next;

    this._deleteValue(null, head, val);
    return head;
  }

  _deleteValue(prev, curr, val) {
    if (curr === null) return;

    if (val === curr.val) {
      prev.next = curr.next;
      return;
    }

    this._deleteValue(curr, curr.next, val);
  }
}

const linkedList = new LinkedList();

linkedList.append(12);
linkedList.append(13);
linkedList.append(14);
linkedList.append(15);

linkedList.print(linkedList.head);
linkedList.contains(15);
linkedList.contains(10);

const deleted = linkedList.deleteValue(linkedList.head, 12);

linkedList.print(deleted);

const total = linkedList.sumList(linkedList.head);
console.log(total);
