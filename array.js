/* eslint-disable no-undef */
const Memory = require('./memory');
const memory = new Memory;

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    //resize the array so there is space for the new item using the _resize method
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error(`Out of memory`);
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
  //best, worst, average case of O(n);
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error(`Index Error`);
    }
    return memory.get(this.ptr + index);
  }
  //Both are O(1) operations, so retrieving values from any point in an array also has best, worst, and average-case performance of O(1).
  pop() {
    if (this.length == 0) {
      throw new Error("Index error");
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  // this is just some pointer arithmetic and memory access it's an O(1) operation.
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index Error");
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  //the best case, you are inserting the value at the back of the array: it's just the same as pushing. O(1)
  //worst case is inserting the value at the start of the array. This requires every value to be shifted 1 memory address later; that's n copies. O(n)
  //average case is inserting a value into the middle of the array. O(n)
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error("Index Error");
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
  //best case is O(1), average, worst case are O(n)
}

Array.SIZE_RATIO = 3;
//each time you go over the capacity, you triple the size of memory which is allocated.
//In the best and average case for pushing you won't need to resize,
// so these become O(1) operations.
//In the worst case, you still need to resize so that remains O(n).

module.exports = Array;