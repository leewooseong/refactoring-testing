// 필요한 것은 외부에서 받아오도록 수정
// const ProductClient = require("./product_client");

class ProductService {
    // 기존의 코드는 class 내부에서 스스로의 의존을 결정하고 만들어서 사용하는 것은 의존성 주입의 원칙에 어긋난다.
    // 필요한 것은 외부에서 받아오도록 수정(의존성 역전시키기)
    // -> 테스트할 때는 테스트용 productClient 주입
    // -> 실제로 production에서는 실제의 productClient 주입
    constructor(productClient) {
        // this.ProductClient = new ProductClient();
        this.productClient = productClient;
    }

    fetchAvailableItems() {
        return this.productClient
            .fetchItems()
            .then((items) => items.filter((item) => item.available));
    }
}

module.exports = ProductService;
