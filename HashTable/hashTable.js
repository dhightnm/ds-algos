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

const hash = (key, arrayLen) => {
  let total = 0;
  const PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const value = char.charCodeAt(0) - 96;
    total = (total * PRIME + value) % arrayLen;
  }
  return total;
};

/* Using seperate chaning you store collisions in the same spot
   using nested data structures */

/* Linear probing you search throught the entire array to look for 
   the next available slot */
