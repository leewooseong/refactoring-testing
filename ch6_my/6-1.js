function calculateOutstanding(outstanding, orderList) {
    for (const order of orderList) {
        outstanding += order.amount;
    }
    return outstanding;
}

function recordDueDate() {
    const today = new Date();
    return new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 30
    );
}

// 청구서 출력함수
// invoice: 청구서, 송장
// owe: 빚
// outstanding: 미지불된 빚?
// dueDate: 지불예정일
export function printOwing(invoice) {
    let outstanding = 0;
    outstanding = calculateOutstanding(outstanding, invoice.orders);
    invoice.dueDate = recordDueDate();

    //print details
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");

    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
    orders: [{ amount: 2 }, { amount: 5 }],
    customer: "엘리",
};
printOwing(invoice);
