const UserService = require("../user_service");
const UserClient = require("../user_client");
jest.mock("../user_client");

// 해당 테스트는 client 단의 login함수가 호출되었는지 여부를 확인해야한다.
describe("userService test", () => {
    const clientLogin = jest.fn(async () => "success");
    UserClient.mockImplementation(() => {
        return {
            login: clientLogin,
        };
    });

    let userService;

    beforeEach(() => {
        userService = new UserService(new UserClient());
    });

    it("checking isLoggedIn was executed", async () => {
        await userService.login("myID", "myPW");
        expect(clientLogin).toHaveBeenCalledTimes(1);
    });

    it("should not call login() again if already logged in", async () => {
        // 함수가 2번 호출되더라도 login 메서드는 한번만 호출된다.
        await userService.login("myID", "myPW");
        await userService.login("myID", "myPW");

        expect(clientLogin).toHaveBeenCalledTimes(1);
    });
});
