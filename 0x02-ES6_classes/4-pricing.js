import Currency from "./3-currency";

export default class Pricing extends Currency {
    constructor(amount, currency) {

        super(currency);
        this._amount = amount;
        this._name = currency._name;
        this._code = currency._code;
        this._currency = currency;
    }

    // Getters
    get amount() {
        return this._amount;
    }

    get currency() {
        return this._currency;
    }

    //Setters

    set amount(newAmount) {
        this._amount = newAmount;

    }

    set currency(newCurrency) {
        this._currency = newCurrency;
    }

    displayFullPrice() {
        return this._amount + " " + this.name + " " + '(' + this._code + ')'

    }

    static convertPrice(amount, conversionRate) {
        return (amount * conversionRate);
    }


}
