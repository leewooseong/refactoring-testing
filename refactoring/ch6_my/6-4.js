export function isDeliveryFree(anOrder) {
    // basePrice가 중복으로 선언됨 -> 제거
    return anOrder.basePrice > 1000;
}
