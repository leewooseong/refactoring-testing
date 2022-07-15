// 추출된 함수를 인라인하는 방법
// 1. extract(추출): 부분적인 코드를 의미있는 함수로 묶거나 변수로 만들어두면서 의미있는 이름으로 부여
// 2. inline(인라인): 불필요한 추출에 대해서 인라인을 수행
// inline vs extranct
// - 언제 인라인하고 추출하는지 정해진 정답같은건 없다.
// - 지난날의 경험, 개발자의 직관을 통해..

// 예제 1
// rating: 등급 매기기
export function rating(driver) {
    return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 아래의 코드가 인라인이 필요한 이유
// - 특정 행위에 대한 코드를 작성하는 것이 아니라 단순히 객체의 속성을 이용했기 때문에 따로 함수로 빼지는 않아도 된다.
// - 함수 이름이 담고 있는 내용이 아닌 함수 이름 그대로가 코드로 작성되어 있기 때문에 굳이 함수로 만들 필요가 없다.

// function moreThanFiveLateDeliveries(dvr) {
//     return dvr.numberOfLateDeliveries > 5;
// }

// ※ 함수를 추출하는 경우
// - 특정한 조건을 검사하고 그것이 반복적으로 쓰이고 조건이 변경이 가능해서 추후에 유지보수하기 편하다면 함수를 추출한다.

// 예제 2
function reportLines(customer) {
    // 함수에서 가지고 있는 값을 반환하는 것이라면 lines 대신 result를 쓰는 것을 추천
    const lines = [];
    lines.push(["name", customer.name]);
    lines.push(["location", customer.location]);
    return lines;
}

// 아래의 코드가 인라인이 필요한 이유
// - 너무 세밀하게 함수를 나눈 경우 인라인이 필요
// function gatherCustomerData(out, customer) {
//     out.push(["name", customer.name]);
//     out.push(["location", customer.location]);
// }
