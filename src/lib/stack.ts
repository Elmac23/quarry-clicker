export class Stack<T> {
  private items: T[];
  constructor() {
    this.items = [];
  }

  push(element: T) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty!");
    }
    return this.items.pop();
  }

  clear() {
    this.items = [];
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty!");
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}
