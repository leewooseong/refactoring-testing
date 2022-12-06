// Class ver.
// - class 안에서 변수를 추출할 때는 어떻게 해야할지 살펴보자.
// - 일반 함수든 class든 긴 표현식이 있다면 단계별로 나누어서 변수로 추출하면 좋다.
export class Order {
    // private field
    #data;
    constructor(aRecord) {
        this.#data = aRecord;
    }

    get quantity() {
        return this.#data.quantity;
    }
    get itemPrice() {
        return this.#data.itemPrice;
    }

    // getter를 이용해서 코드를 정리
    // - getter를 이용해서 각각의 데이터에 접근할 수 있다.
    get price() {
        return this.basePrice - this.discount + this.shipping;
    }
    // 추출된 코드
    get basePrice() {
        return this.quantity * this.itemPrice;
    }
    get discount() {
        Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
    }
    get shipping() {
        Math.min(this.quantity * this.itemPrice * 0.1, 100);
    }
}

// private field 사용하기
// 구 버전: 변수 앞에 '_'를 붙여서 private라는 것을 알려줌(책에서 표기하고 있는 코드)
// 지금 버전: #data처럼 private field 변수를 선언해준 후 사용한다.
