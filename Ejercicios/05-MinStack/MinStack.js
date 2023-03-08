class Node {
  constructor() {
    this.top = null;
  }
}

class MinStack {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = {
  Node,
  MinStack
}
