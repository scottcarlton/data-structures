/** Linked List */

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
  }
  append(value) {
    const newNode = { value: value, next: null};

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }
  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if (existingNode) {
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }
  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while(currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
  shift() {
    if (!this.head) {
      return null;
    }

    const deletedNode = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedNode;

  }
  delete(value) {
    if (!this.head) {
      return;
    }

    while(this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while(currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }
  length() {

    return this.toArray().length;

  }
  toArray() {
    const elements = [];

    let currentNode = this.head;

    while(currentNode) {
      elements.push(currentNode);
      currentNode = currentNode.next;
    }

    return elements;
  }
}

const list1 = new LinkedList();

console.log('--- Linked List ---');
list1.append(1);
list1.append('hello world');
list1.append(true);
list1.append('Max');
list1.append('Max');
list1.append(12.34);
list1.prepend('First Value');

console.log(list1.toArray());

list1.delete('Max');
list1.delete('First Value');
list1.delete(12.34);

console.log(list1.toArray());

console.log(list1.find('Max'));
console.log(list1.find('hello world'));


list1.insertAfter('My World', 'hello world');

console.log(list1.toArray());
console.log('--- END Linked List ---');

