export function printOwing(invoice) {
    let outstanding = 0;

    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");

    // calculate outstanding
    for (const order of invoice.orders) {
        outstanding += order.amount;
    }

    // record due date
    const today = new Date();
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 30
    );

    //print details
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
    orders: [{ amount: 2 }, { amount: 5 }],
    customer: "엘리",
};
printOwing(invoice);
