import LinkedList from './linked_list.js';

/** Queues
 ** First In, First Out
*/

class Queue {
  constructor() {
    this.list = new LinkedList();
  }
  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
    return this.list.shift();
  }
  isEmpty() {
    return !this.list.head;
  }
  toArray() {
    return this.list.toArray();
  }
}

const queue = new Queue();

console.log('--- Queue ---');
queue.enqueue('Hello Queue');
queue.enqueue(1);
queue.enqueue(true);
console.log(queue.toArray());
queue.dequeue();
console.log(queue.toArray());
console.log('--- END Queue ---');
