/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* To implemtent a hash table you use an array
   We will be converting keys to array indices
   We will make a hash fuction to do this */

/* const hash = (key, arrayLen) => {
  let total = 0;
  for (const char of key) {
    const value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}; */

/* Using seperate chaning you store collisions in the same spot
using nested data structures */

/* Linear probing you search throught the entire array to look for
the next available slot */

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hashed = this.hash(key);
    if (!this.keyMap[hashed]) {
      this.keyMap[hashed] = [];
    }
    this.keyMap[hashed].push([key, value]);
    return hashed;
  }

  get(key) {
    const hashed = this.hash(key);
    if (this.keyMap[hashed]) {
      for (let i = 0; i < this.keyMap[hashed].length; i++) {
        if (this.keyMap[hashed][i][0] === key) {
          return this.keyMap[hashed][i][1];
        }
      }
    }
    return undefined;
  }
}

const ht = new HashTable(17);

ht.set('hello world', 'firstHash');
