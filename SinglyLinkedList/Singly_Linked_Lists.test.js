/* eslint-disable no-undef */
const SinglyLinkedList = require('./Singly_Linked_List');

const testObj = new SinglyLinkedList();

test('should return a basic object', () => {
  expect(typeof testObj === 'object').toBe(true);
});

test('Should push a new value to the created class', () => {
  testObj.push('value1');
  expect(testObj.get(0).value).toBe('value1');
});

test('2 + 2 is equal to 4', () => {
  expect(2 + 2).toEqual(4);
});
