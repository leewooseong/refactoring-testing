const add = require("../add.js");

test("adds 1 + 2 to equal 3", () => {
    // pass 예시
    expect(add(1, 2)).toBe(3);
    // fail 예시
    // expect(add(1, 2)).toBe(4);
});
