// printOwing 함수 내부에서 사용되는 함수들은 export 되지 않아서 함수 외부에서는 사용이 불가능하다.
export function printOwing(invoice) {
    // 배너 출력
    printBanner();

    // 총 가격 계산
    let outstanding = calculateOutstanding(invoice);

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

// 함수 내부에서 객체의 내용이 변경되기 때문에 함수의 이름에 이런 내용도 녺여내야한다.
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
