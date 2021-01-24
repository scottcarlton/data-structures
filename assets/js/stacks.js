import LinkedList from './linked_list.js';

/** Stack
 ** Last In, First Out
*/

class Stack {
  constructor() {
    this.list = new LinkedList();
  }
  unshift(value) {
    this.list.prepend(value);
  }
  shift() {
    return this.list.shift();
  }
  toArray() {
    return this.list.toArray();
  }
}


const stack = new Stack();

console.log('--- Stack ---');
stack.unshift('Hello Stack');
stack.unshift(1);
stack.unshift(true);
console.log(stack.toArray());
stack.shift();
console.log(stack.toArray());
console.log('--- END Stack ---');
