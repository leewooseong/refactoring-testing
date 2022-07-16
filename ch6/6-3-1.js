// 불필요한 주석을 보면 코드로 풀어볼 수 있을지 고민해보자!
export function price(order) {
    // 가격(price) = 기본가격 - 수량할인 + 배송비
    const basePrice = order.quantity * order.itemPrice;
    const discount =
        order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
    return basePrice - discount + shipping;
}
