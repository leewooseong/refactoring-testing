// product service no dependency injection version.(= 나쁜 버전)
// 테스트를 진행할 파일
const ProductClient = require("./product_client");

class ProductService {
    constructor() {
        this.ProductClient = new ProductClient();
    }

    // 서버에 있는 아이템을 다 받아와서 구매가 가능한 상품만 filtering해서 보여주는 함수(테스트를 진행할 함수)
    fetchAvailableItems() {
        // available이 true인 item만 filtering
        return this.ProductClient.fetchItems().then((items) =>
            items.filter((item) => item.available)
        );
    }
}

module.exports = ProductService;
