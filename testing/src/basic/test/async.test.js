const fetchProduct = require("../async");

describe("Async", () => {
    // 문제 : 비동기 코드(Promise)는 시간을 두고 비동기적으로 수행되기 때문에 then이 호출됐는지 안됐는지, 결과가 나왔는지 안나왔는지, Promise가 끝났는지 안끝났는지, 상관하지 않고 함수를 호출한 다음에 코드 블록이 끝이난다.
    // 즉, 별도의 expect를 수행하지 않고 코드 블럭이 끝나버린 것 -> 테스트가 통과가 되었다고 나올 수 있다.

    // 해결책 1 : done() 사용하기
    // - 매개변수로 done이라는 것을 받아와서 done()을 다 종료된 시점에 호출해주면 된다.
    // - 하지만 수동적으로 done을 호출하는 것은 코드를 더럽힐 수 있다.
    // - done을 사용하면 프로미스의 결과를 확인하는데까지 시간이 걸리기 때문에 테스트 수행에 시간이 걸릴 수 있다.
    it("async-done", (done) => {
        fetchProduct().then((item) => {
            expect(item).toEqual({
                item: "Milk",
                price: 200,
            });
            done();
        });
    });

    // 해결책 2 : return문 사용하기
    // - 해당 Promise를 return 해주면 done 함수를 쓴 것과 같은 효과를 볼 수 있다.
    // - 하지만 done 함수와는 다르게 즉각적으로 테스트 결과를 확인할 수 있기 때문에 테스트 속도가 더 빠르다.
    // - 코드도 더 깔끔해지는 효과
    it("async-return", () => {
        return fetchProduct().then((item) => {
            expect(item).toEqual({ item: "Milk", price: 200 });
        });
    });

    // 해결책 3 : await 사용하기
    // - return 하는 방식과 동일한 방식
    it("async-await", async () => {
        const product = await fetchProduct();
        expect(product).toEqual({ item: "Milk", price: 200 });
    });

    // 해결책 4 : resolves와 rejects 사용하기
    it("async-resolves", () => {
        // 비동기이기 때문에 제대로된 결과를 얻기위해선 '해결책 2'와 같이 return문이 필요하다.
        return expect(fetchProduct()).resolves.toEqual({
            item: "Milk",
            price: 200,
        });
    });
    it("async-rejects", () => {
        return expect(fetchProduct("error")).rejects.toBe("network error");
    });
});

// ※ done()으로 해결이 가능한 이유
// it의 매개변수로 name, fn(콜백 함수), timeout 이렇게 3가지가 올 수 있는데
// fn(콜백함수) 정의를 보면 doneCallback을 명시할 수 있다.
// it과 fn을 command click해보면 자세한 코드를 확인할 수 있다.
// 이때 @types/jest가 잘 실행되는지 확인해야한다.

// 내 방법
// test("async test", () => {
//     fetchProduct()
//         .then((res) => {
//             expect(res).toEqual({ item: "Milk", price: 200 });
//         })
//         .catch((err) => {
//             expect(err).toBe("network error");
//         });
// });
