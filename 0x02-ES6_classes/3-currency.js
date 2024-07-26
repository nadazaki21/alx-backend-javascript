export default class Currency {
    constructor(code, name) {
        this._name = namel;
        this._code = code;
    }

    // Getters
    get name() {
        return this._name;
    }

    get code() {
        return this._code;
    }

    //Setters

    set name(newName) {
        this._name = newName;
    }

    set code(newCode) {
        this._code = newCode;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;

    }
}