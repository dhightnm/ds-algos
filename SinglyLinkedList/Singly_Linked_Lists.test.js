/* eslint-disable no-undef */
const SinglyLinkedList = require('./Singly_Linked_List');

const testObj = new SinglyLinkedList();

test('should return a basic object', () => {
  expect(typeof testObj === 'object').toBe(true);
});

test('2 + 2 is equal ot four', () => {
  expect(2 + 2).toEqual(4);
});
