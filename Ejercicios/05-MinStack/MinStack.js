class Stack {
  constructor() {
    this.top = null;
    this.minNum = Infinity;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

Stack.prototype.push= function(value) {
  if(value < this.minNum) this.minNum = value;
  if(!this.top) {
    this.top = new Node(value);
  }
  else {
    let newInfo = new Node(value);
    let oldInfo = this.top;
    this.top = newInfo;
    newInfo.next = oldInfo;
  }
};

Stack.prototype.pop = function() {
  if(!this.top.next) return this.top.value;
  else {
    let oldInfo = this.top;
    this.top = this.top.next
    return oldInfo.value
  }
};

Stack.prototype.min = function() {
  return this.minNum;
};

Stack.prototype.peek = function() {
  return this.top.value;
};

const test_stack = new Stack()
test_stack.push(32)
test_stack.push(5)
test_stack.push(7)
console.log(test_stack)
console.log(test_stack.pop())
console.log(test_stack)
console.log(test_stack.min())
console.log(test_stack.peek())

module.exports = {
  Node,
  Stack
}
