// 너무 불필요하게 나눠져있다면 다시 합쳐줄 필요가 있다.
// 굳이 한눈에 봐도 뭔지 이해가되고 짧고 간결한데 굳이 추출할 필요가 없다.
export function isDeliveryFree(anOrder) {
    // basePrice가 중복으로 선언됨 -> 제거
    return anOrder.basePrice > 1000;
}
