

class HashTable {
  constructor() {
    this.size = 100;
    // this.buckets = Array(100).fill(null); Open Addressing
    this.buckets = Array(100).fill(null).map(() => []);
  }
  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }

    return hash % this.size;
  }
  set(key, value) {
    // Chaining method
    const keyHash = this.hash(key);
    const bucket = this.buckets[keyHash];
    const storedElement = bucket.find(element => element.key === key);

    if (storedElement) {
      storedElement.value = value;
    } else {
      bucket.push({ key, value })
    }

    /** Open Addressing
     * let keyHash = this.hash(key)
     * if (this.buckets[keyHash] === null || this.buckets[keyHash].key === key) {
     *   this.buckets[keyHash] = { key, value }
     * } else {
     *   while (this.buckets[keyHash] !== null) {
     *     keyHash++;
     * }
     * this.buckets[keyHash] = { key, value }
     **/

  }
  get(key) {
    // Chaining method
    const keyHash = this.hash(key);
    const bucket = this.buckets[keyHash]
    const storedElement = bucket.find(element => element.key === key);
    return storedElement;

    /** Open Addressing
     * const keyHash = this.hash(key)
     * for (let i = keyHash; i < this.buckets.length; i++) {
     *   if (!this.buckets[i]) {
     *     continue;
     *   }
     *   if (this.buckets[i].key === key) {
     *     return this.buckets[i];
     *   }
     * }
     * return undefined;
     **/
  }
  show() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}

const table = new HashTable();

table.set('scottcarlton', 'scottcarlton');
table.set('deniseshaller', 'deniseshaller');
console.log(table.show());
console.log(table.get('deniseshaller'));
