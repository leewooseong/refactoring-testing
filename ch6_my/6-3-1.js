export function price(order) {
    // 가격(price) = 기본가격 - 수량할인 + 배송비
    const basicPrice = order.quantity * order.itemPrice;
    const quantityDiscount =
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shippingCost = Math.min(order.quantity * order.itemPrice * 0.1, 100);

    return basicPrice - quantityDiscount + shippingCost;
}
