// printOwing 함수 내부에서 사용되는 함수들은 export 되지 않아서 함수 외부에서는 사용이 불가능하다.
export function printOwing(invoice) {
    // 배너 출력
    printBanner();

    // 총 가격 계산
    // 원래는 let 변수였지만 해당 값 처리를 calculateOustanding으로 이전하고 이후 outstanding에 값 변화가 없으므로 const로 처리해준다.
    const outstanding = calculateOutstanding(invoice);

    // 지급 날짜를 계산
    recordDueDate(invoice);

    //세부 사항 출력
    printDetails(invoice, outstanding);
}

function printBanner() {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
}

// 총 가격을 계산하는 함수
// - outstanding(result)는 추출함수 밖에서도 사용되기 때문에 새로운 변수를 이용해서 값을 반환해준다.
// - 이렇게 사용하면 외부에 있던 outstanding 변수는 변하지 않게 됨으로 const로 바꿀 수 있게 된다.
function calculateOutstanding(invoice) {
    // 함수 내에서 결과값을 반환하는 목적의 변수라면 result라는 이름을 많이 사용
    // outstanding -> result 변수면 변경

    // 반복문(절차지향적 코드) 작성 -> 파이프라인(함수형프로그래밍)으로 변경
    // 1. 반복문
    // let result = 0;
    // for (const o of invoice.orders) {
    //     result += o.amount;
    // }
    //
    // return result;
    // 2. 파이프라인
    return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
}

// 지급 날짜를 계산해주는 함수
// - DueDate와 같이 시스템 시간을 알려주는 함수를 직접호출하면 테스트할 때마다 결과가 달라져서 오류 상황을 재현하기 어렵다.
// - 따라서 아래처럼 함수로 분리해준다.
// - 함수 내부에서 객체의 내용이 변경되기 때문에 함수의 이름에 이런 내용도 녺여내야한다.
function recordDueDate(invoice) {
    const today = new Date();
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 30
    );
    // ※ invoice 객체 수정
    // - invoice에 dueDate라는 속성을 추가해준다. -> 불변성 참고
}

// 세부 사항을 출력하는 함수
// - 해당 함수에서 사용되는 지역변수는 다른 값을 다시 대입하지 않고 출력에만 사용되기 때문에 그냥 매개변수로 넘겨주면 해결이 된다.
function printDetails(invoice, outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
    orders: [{ amount: 2 }, { amount: 5 }],
    customer: "엘리",
};
printOwing(invoice);
