// login 메서드를 사용해서 서버에 로그인 api 요청을 시도 & 결과를 받아온다.
class UserClient {
    login(id, password) {
        return fetch("http://example.com/login/id+password").then((response) =>
            response.json()
        );
    }
}

module.exports = UserClient;
