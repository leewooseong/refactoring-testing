class ProductClient {
    // 서버 백엔드에 있는 제품에 대한 정보들을 네트워크 상에서 받아오는 클라이언트
    fetchItems() {
        return fetch("http://example.com/login/id+password").then((response) =>
            response.json()
        );
    }
}

module.exports = ProductClient;
