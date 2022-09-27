class Stack {
    #stackData;
    constructor() {
        this.#stackData = [];
    }
    get() {
        return this.#stackData;
    }
    push(item) {
        if (!item) {
            throw new Error("item is empty");
        }
        this.#stackData[this.#stackData.length] = item;
    }
    pop() {
        this.#stackData = this.#stackData.slice(0, -1);
    }
}

module.exports = Stack;
