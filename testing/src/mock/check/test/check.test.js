const check = require("../check");

describe("check", () => {
    let onSuccess;
    let onFail;

    beforeEach(() => {
        // jest에서 제공하는 Mock 함수 할당
        onSuccess = jest.fn();
        onFail = jest.fn();
        // onSuccess나 onFail의 구현 내용은 코드에 없지만 이렇게 mock 함수를 만들어 놓으면 마치 함수가 있는 것처럼 테스트를 수행할 수 있다.
        // 더 나아가 해당 mock 함수를 특정한 인자와 함께 실행시킬 수도 있고 호출 여부 및 호출 시 사용된 인자를 expect를 이용하여 확인할 수 있다.
    });

    it("should call onSuccess when predicate is true", () => {
        check(() => true, onSuccess, onFail);
        // expect(onSuccess.mock.calls.length).toBe(1);
        // expect(onSuccess.mock.calls[0][0]).toBe("yes");
        // expect(onFail.mock.calls.length).toBe(0);
        // ↑ mock.calls를 일일이 붙이기 힘들다 ↑
        // ↓ 만들어진 전용 api를 사용하자! ↓
        expect(onSuccess).toHaveBeenCalledTimes(1);
        expect(onSuccess).toHaveBeenCalledWith("yes");
        expect(onFail).toHaveBeenCalledTimes(0);
    });

    it("should call onFail when predicate is false", () => {
        check(() => false, onSuccess, onFail);

        expect(onFail).toHaveBeenCalledTimes(1);
        expect(onFail).toHaveBeenCalledWith("no");
        expect(onSuccess).toHaveBeenCalledTimes(0);
    });
});
