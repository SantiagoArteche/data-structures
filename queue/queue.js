//w Array

const queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue);
queue.shift();
console.log(queue);

//W LinkedList

class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.back = null;
    this.size = 0;
    this.front = null;
  }

  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.back = newNode;
      this.front = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;

    const removedNode = this.front;

    if (this.size === 1) {
      this.back = null;
    }
    this.front = this.front.next;
    this.size--;

    return removedNode.val;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
