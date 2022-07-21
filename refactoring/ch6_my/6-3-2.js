// class ver.
export class Order {
    constructor(aRecord) {
        this._data = aRecord;
    }

    basePrice = this.quantity * this.itemPrice;
    discount = Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
    shipping = Math.min(this.quantity * this.itemPrice * 0.1, 100);

    get quantity() {
        return this._data.quantity;
    }
    get itemPrice() {
        return this._data.itemPrice;
    }

    get price() {
        return basePrice - discount + shipping;
    }
}
