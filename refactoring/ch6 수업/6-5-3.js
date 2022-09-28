// 필요한 매개변수는 aCustomer.address.state 즉 주소에 기입된 주이다!
// aCustomer로 넘겨주는 것은 좋지 않다.
// ***함수 내부에 필요로 하는 것만 받아오므로써 외부 다른 객체에 대한 의존도를 낮추고 재사용성을 높일 수 있다.
export function inNewEngland(state) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(state);
}
