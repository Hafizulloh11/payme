export class CardRepository {
    cardList = [];
    id = 0;
    create(...cards) {
        for (let card of cards) {
            if (this.isExist(card.number)) {
                throw new Error(`card ${card.number} already exists`);
            }
            card.setId(++this.id);
            this.cardList.push(card);
        }
    }
    isExist(cardNumber) {
        for (let card of this.cardList) {
            if (card.number === cardNumber)
                return true;
        }
        return false;
    }
    getByID(cardID) {
        for (let card of this.cardList) {
            if (card.getId() === cardID) {
                return card;
            }
        }
        throw new Error("card not found");
    }
    getList() {
        return this.cardList;
    }
    getByOwnerId(ownerID) {
        const cards = [];
        for (let card of this.cardList) {
            if (card.ownerID === ownerID) {
                cards.push(card);
            }
        }
        if (cards.length === 0) {
            throw new Error("cards not found");
        }
        return cards;
    }
}
