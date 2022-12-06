// 불필요한 주석을 보면 코드로 풀어볼 수 있을지 고민해보자!
export function price(order) {
    const basePrice = order.quantity * order.itemPrice;
    const discount =
        order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);

    // 가격(price) = 기본가격 - 수량할인 + 배송비 : 코드로 표현할 수 있는 불필요한 주석
    // - 코드에 변수를 선언해줘서 한눈에 보기 편하게 수정!
    return basePrice - discount + shipping;
}

// ※ discount & quantityDiscount : 변수 이름 정하기
// - 책에서는 discount를 대신해 해당 변수 이름을 quantityDiscount으로 선언해주었다.
// - 자세한 변수명을 때론 도움이 될 수 있지만 짧게 적는 것이 이해를 해치지 않는다면 짧은 변수 이름을 사용하는 것이 좋다.
// - 정말 필요한 정보라면 길게라도 붙이는 것이 ok!
