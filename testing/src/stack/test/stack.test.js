const Stack = require("../stack_arr");

describe("Stack", () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });
    // 요구사항 1.
    // - stack이 만들어지면 스택의 size는 0이여야 한다.
    it("is created empty", () => {
        expect(stack.size()).toBe(0);
    });

    // 요구사항 2.
    // - push하는 걸 허용한다.
    it("allows to 🍌 push item", () => {
        stack.push("🍌");
        expect(stack.size()).toBe(1);
    });

    // 요구사항 3.
    // - pop을 허용한다.
    describe("pop", () => {
        it("throws an error if stack is empty", () => {
            expect(() => {
                stack.pop();
            }).toThrow("Stack is empty");
        });

        it("return the last pushed item & removes it from the stack", () => {
            stack.push("🍌");
            stack.push("🍎");

            expect(stack.pop()).toBe("🍎");
            expect(stack.size()).toBe(1);
        });
    });

    // 요구사항 4.
    // - peek 구현: 마지막 push 아이템을 확인하는 기능
    describe("peek", () => {
        it("throws an error if stack is empty", () => {
            expect(() => {
                stack.peek();
            }).toThrow("Stack is empty");
        });
        it("returns the last pushed item but keeps it in the stack", () => {
            stack.push("🍌");
            stack.push("🍎");

            expect(stack.peek()).toBe("🍎");
            expect(stack.size()).toBe(2);
        });
    });
});
