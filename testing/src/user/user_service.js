// 서비스에서는 client 객체를 받아와서 client 객체의 login 메소드를 사용하여 로그인을 추가로 진행할지 말지를 판단한다.
class UserService {
    constructor(userClient) {
        this.userClient = userClient;
        this.isLoggedIn = false;
    }

    // 로그인이 되었다면 Pass
    // 로그인이 안되어있다면 login함수를 수행하고, isLoggedIn을 true로 바꿔주는 것
    login(id, password) {
        if (!this.isLoggedIn) {
            return this.userClient
                .login(id, password)
                .then((data) => (this.isLoggedIn = true));

            // client를 별개로 관리하는 이유***
            // - 아래와 같이 client 부분을 Service 안으로 심어줄 경우 네트워크에 항상 의존하게되어 단위 테스트를 하기 어려워 진다. -> 그래서 별도의 class로 분리하는 것
            // return fetch("http://example.com/login/id+password").then(
            //     (response) => response.json()
            // );
        }
    }
}

module.exports = UserService;
