class Stack {
  constructor() {
    this.top = null;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

Stack.prototype.push_stack = function(value) {
  if(!this.top) {
    this.top = new Node(value)
  }
}

const test_stack = new Stack()
test_stack.push_stack(32)
test_stack.push_stack(5)
test_stack.push_stack(7)
console.log(test_stack)

module.exports = {
  Node,
  Stack
}
