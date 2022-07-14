const Calculator = require("../calculator.js");

const calculator = new Calculator();

test("check new Calculator", () => {
    // constructor check
    expect(calculator.value).toBe(0);
    // methods check
    expect(calculator.set).toBeDefined();
    expect(calculator.clear).toBeDefined();
    expect(calculator.add).toBeDefined();
    expect(calculator.subtract).toBeDefined();
    expect(calculator.multiply).toBeDefined();
    expect(calculator.divide).toBeDefined();
});

test("set method", () => {
    calculator.set(3);
    expect(calculator.value === 3).toBeTruthy();
});
test("clear method", () => {
    calculator.clear();
    expect(calculator.value === 0).toBeTruthy();
});
test("add method", () => {
    const value = calculator.value;
    calculator.add(1);
    expect(value + 1 === calculator.value).toBeTruthy();
});
test("subtract method", () => {
    const value = calculator.value;
    calculator.subtract(1);
    expect(value - 1 === calculator.value).toBeTruthy();
});
test("multiply method", () => {
    const value = calculator.value;
    calculator.multiply(2);
    expect(value * 1 === calculator.value).toBeTruthy();
});
test("divide method", () => {
    const value = calculator.value;
    calculator.divide(3);
    expect(value / 3 === calculator.value).toBeTruthy();
    // 예외 처리
    // expect(() => calculator.divide(0)).toThrow(Error);
});

// describe: 관련된 테스트를 묶어줄 수 있다. 관련있는 테스트를 하나의 그룹으로 만들 수 있다.

// 테스트 케이스를 모아놓고 한번에 테스트하는 방법 찾아보기
