const Calculator = require("../calculator.js");

// describe
// - 관련있는 테스트를 하나의 그룹으로 만들 수 있다.
describe("Calculator", () => {
    // beforeEach: 이 함수를 사용하여 각각의 테스트에 필요한 객체를 독립적으로 제공해줌.
    let cal;
    beforeEach(() => {
        cal = new Calculator();
    });

    // it: Calculator를 가리키는 3인칭 주어, 이전의 test와 동일한 역할.
    it("inits with 0", () => {
        expect(cal.value).toBe(0);
    });

    it("sets", () => {
        cal.set(9);
        expect(cal.value).toBe(9);
    });

    it("clear", () => {
        cal.set(9);
        cal.clear();
        expect(cal.value).toBe(0);
    });

    describe("adds", () => {
        it("adds", () => {
            cal.set(1);
            cal.add(2);

            expect(cal.value).toBe(3);
        });
        // 테스트 도중 에러는 테스트를 실패로 나타낸다.
        // 따라서 예상할 수 있는 에러의 경우 에러처리가 필요하다.
        it("add should throw an error if value is greater than 100", () => {
            expect(() => {
                cal.add(101);
            }).toThrow("Value can not be greater than 100");
        });
        // ※ 에러 메시지 expect
        // - 에러 메세지를 expect하는 경우 코드의 에러 메세지의 부분을 toThrow 내에서 포함하고 있다면 에러가 나지 않는다. 하지만 포함하는 내용이 아닌 다른 내용이 toThrow안에 들어가 있다면 에러가 발생한다.
        // 코드의 error message: Value can not be greater than 100
        // 테스트의 error message: Value, can, not,... 는 통과
        // 테스트의 error message: hihi, hello,.. 는 실패
    });

    it("subtracts", () => {
        cal.subtract(1);
        expect(cal.value).toBe(-1);
    });

    it("multiplies", () => {
        cal.set(5);
        cal.multiply(4);
        expect(cal.value).toBe(20);
    });

    // 나누는 것은 까다롭기 때문에 describe으로 다시 분리해준다.
    describe("divides", () => {
        it("0 / 0 === NaN", () => {
            cal.divide(0);
            expect(cal.value).toBe(NaN);
        });
        it("1 / 0 === Infinity", () => {
            cal.set(1);
            cal.divide(0);
            expect(cal.value).toBe(Infinity);
        });
        it("4 / 4 === 1", () => {
            cal.set(4);
            cal.divide(4);
            expect(cal.value).toBe(1);
        });
    });
});
