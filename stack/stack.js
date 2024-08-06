// w Array

const myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
myStack.pop();
console.log(myStack);

// w LinkedList
class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    if (this.size === 0) {
      this.top = new StackNode(val);
    } else {
      const pushNode = new StackNode(val);
      pushNode.next = this.top;
      this.top = pushNode;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) return null;

    const poped = this.top;
    this.top = this.top.next;
    this.size--;
    return poped;
  }

  getTop() {
    if (this.top === null) return console.log("Empty");
    console.log(this.top.val);
  }

  getSize() {
    if (this.size === 0) return console.log(0);
    console.log(this.size);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.getTop();
stack.getSize();
