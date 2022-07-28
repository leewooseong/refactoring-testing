class Stack {
    constructor() {
        this._size = 0;
        this.head = null;
    }

    size() {
        return this._size;
    }

    push(item) {
        const node = { item, before: this.head };
        this.head = node;
        this._size++;
    }

    pop() {
        if (this.head === null) {
            throw new Error("Stack is empty");
        }
        const node = this.head;
        this.head = node.before;
        this._size--;
        return node.item;
    }

    peek() {
        if (this.head === null) {
            throw new Error("Stack is empty");
        }
        return this.head.item;
    }
}

module.exports = Stack;
