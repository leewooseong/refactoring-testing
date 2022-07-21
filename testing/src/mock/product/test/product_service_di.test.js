const ProductService = require("../product_service_di");
const StubProductClient = require("./stub_product_client");

describe("ProductService - Stub", () => {
    let productService;

    beforeEach(() => {
        productService = new ProductService(new StubProductClient());
    });

    it("should filter out only available", async () => {
        // productClient의 fetchItem을 StubProductClient의 fetchItems로  대체해줬기 때문에 🥛, 🍌에 해당하는 배열을 리턴받고 available 값에 대해 filtering하게된다.
        const items = await productService.fetchAvailableItems();
        expect(items.length).toBe(1);
        expect(items).toEqual([{ item: "🥛", available: true }]);
    });
});
