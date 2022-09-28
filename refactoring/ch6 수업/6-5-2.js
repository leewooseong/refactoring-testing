export default class Book {
    #reservations;
    constructor() {
        this.#reservations = [];
    }

    // 우선순위에 따라서 우선예약 기능을 추가하고자 한다.
    // - 방법 1. 추가적인 불리언 타입 매개변수(isPriority)를 추가
    //   - 보통 이러한 매개변수를 flag라고 한다.
    //   -> flag에 따라서 동작하는 함수를 만드는 것은 좋지 않다.(뒤의 함수 api 챕터에서 다시 다룰 예정)
    addReservation(customer, isPriority = false) {
        this.#reservations.push(customer);
    }

    hasReservation(customer) {
        return this.#reservations.some(
            (reservedCustomer) => reservedCustomer.id === customer.id
        );
    }
}
