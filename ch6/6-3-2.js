// class ver.
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

    get price() {
        return this.basePrice - this.discount + this.shipping;
    }

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
// 구 버전: 변수 앞에 '_'를 붙여서 private라는 것을 알려줌
// 지금 버전: #data처럼 private field 변수를 선언해준 후 사용한다.
