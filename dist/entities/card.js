export class Card {
    number;
    password;
    expiry;
    card;
    balance;
    bankName;
    ownerID;
    id;
    constructor(number, password, expiry, card, balance, bankName, ownerID) {
        this.number = number;
        this.password = password;
        this.expiry = expiry;
        this.card = card;
        this.balance = balance;
        this.bankName = bankName;
        this.ownerID = ownerID;
    }
    setId(cardID) {
        this.id = cardID;
    }
    getId() {
        return this.id;
    }
}
