const Stack = require("../stack");

describe("stack test", () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });

    describe("push test", () => {
        it("push item in stack", () => {
            const stackBeforePushing = stack.get();
            const beforeLength = stackBeforePushing.length;
            const input = "첫 번째 요소";

            stack.push(input);

            const stackData = stack.get();
            expect(stackData.length).toBe(beforeLength + 1);
            expect(stackData[stackData.length - 1]).toBe(input);
        });
        it("push without item", () => {
            expect(() => {
                stack.push();
            }).toThrow("item is empty");
        });
    });

    describe("pop test", () => {
        it("pop the last inputted item ", () => {
            const stackBeforePushing = stack.get();
            const beforeLength = stackBeforePushing.length;

            stack.pop();

            if (stack.length <= 1) {
                expect(stack).toEqual([]);
                expect(stack.get().length).toBe(0);
            } else if (stack.length > 1) {
                expect(stack.get().length).toBe(beforeLength - 1);
                expect(stack).toEqual([...stackBeforePushing].slice(0, -1));
            }
        });
    });
});
