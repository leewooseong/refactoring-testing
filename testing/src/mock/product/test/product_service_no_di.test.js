// 독립적인 단위로 test 진행하기(문제가 있는 코드)
const ProductService = require("../product_service_no_di");
const ProductClient = require("../product_client");
jest.mock("../product_client");

describe("ProductService", () => {
    // # ProductService에서 사용하는 다른 모듈, 클래스로부터 영향을 받지 않기 위해서 나머지 모든 의존성에 대해서는 mock을 이용할 것(단위 테스트)
    // -> 이렇게 되면 우리가 테스트하고 싶은 원하는 로직(ProductService)만 날카롭게 검사가 가능하다.
    // -> 서로 간의 의존성이 있다면 mock으로 이걸 분리해주는 것!
    // 1. ProductClient의 fetchItems를 대체할 함수를 생성
    // - 비동기 코드이므로 async를 붙여준다.
    const fetchItems = jest.fn(async () => {
        // fetchItems를 호출하면 mock 함수가 다음의 배열을 리턴해준다.
        return [
            { item: "🥛", available: true },
            { item: "🍌", available: false },
        ];
    });

    // 2. ProductClient의 fetchItems를 만들어둔 fetchItems로 대체
    ProductClient.mockImplementation(() => {
        return {
            fetchItems,
        };
    });

    // # ProductService의 fetchAvailableItems 로직 검사하기
    let productService;
    beforeEach(() => {
        productService = new ProductService();
    });

    it("should filter out only available", async () => {
        // productClient의 fetchItem를 대체해줬기 때문에 🥛, 🍌에 해당하는 배열을 리턴받고 available 값에 대해 filtering하게된다.
        const items = await productService.fetchAvailableItems();
        expect(items.length).toBe(1);
        expect(items).toEqual([{ item: "🥛", available: true }]);
    });

    it("test", async () => {
        const items = await productService.fetchAvailableItems();

        // 각 테스트에서 1번씩 호출되어서 toHaveBeenCalledTimes(2)가 되어야한다고 생각할 수 있다.
        // jest.config.js에 clearMocks: true, 설정이 되어있기 때문에 mock에 관련된 모든 것들이 다 초기화가 되기 때문에 테스트가 통과하는 것
        // 해당 설정이 안되어 있다면 beforeEach를 이용하여 mock을 사용하고 있는 모든 부분에 mockClear()를 적용시켜줘야한다.
        expect(fetchItems).toHaveBeenCalledTimes(1);
    });
});

// ProductClient를 테스트 시 사용해야하는 이유
// - 단위 테스트는 서로 모듈간에 상호작용을 절대 테스트하면 안된다.
// - 딱 단위 하나만을 테스트해야 한다.
// - ProductClient를 사용하지 않고 ProductService로만 테스트를 진행할 경우 우리도 모르게 ProductService 내부의 ProductClient 인스턴스에 의한 fetchItems 함수도 내부적으로 테스트하게 된다.
// - 따라서 ProductClient.fetchItems 함수의 성공 여부에(네트워크 상태에) 의존하는 코드가 되버린다 -> bad 👎
