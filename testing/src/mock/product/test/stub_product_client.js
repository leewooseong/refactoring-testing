// 이전에 작성한 product_service_no_di.js에서는 productClient에 해당하는 부분을 mock으로 필요할 때마다 만들어서 사용했다
// -> 이 부분을 다른 테스트 모듈에서 사용하게 된다면 재사용성이 떨어지게 된다.
// -> 재상용이 가능한 stub implementation을 만든다.

// stub implementation 작성
// - mock이 아니라 실제로 구현 사항이 있는 class!
// - 기존의 productClient와 동일한 interface를 가지고 있으면서 네트워크를 사용하는게 아니라 데이터를 바로 리턴하는 형식의 class(재사용 가능)
// - 기존의 productClient는 mock함수가 데이터를 리턴하도록 만듦 -> 쓸때마다 mock 함수 생성해줘야하는 코드
class StubProductClient {
    async fetchItems() {
        return [
            { item: "🥛", available: true },
            { item: "🍌", available: false },
        ];
    }
}

module.exports = StubProductClient;
// ※ stub_product_client.js는 테스트 용으로만 사용할 것이기 때문에 test폴더 안에 두고 사용한다.
// -> 나중에 최종 배포할 때는 test폴더 안에 있는 내용은 제외하고 production에서만 쓰이는 코드 모아서 배포할 수 있게 된다.
