import { Card } from "../entities/card";
import { User } from "../entities/user";

export class CardRepository {
  private cardList: Card[] = [];
  id: number = 0;

  create(...cards: Card[]) {
    for (let card of cards) {
      if (this.isExist(card.number)) {
        throw new Error(`card ${card.number} already exists`);
      }
      card.setId(++this.id);
      this.cardList.push(card);
    }
  }

  isExist(cardNumber: string): Boolean {
    for (let card of this.cardList) {
      if (card.number === cardNumber) return true;
    }
    return false;
  }

  getByID(cardID: number): Card {
    for (let card of this.cardList) {
      if (card.getId() === cardID) {
        return card;
      }
    }
    throw new Error("card not found");
  }
  getList(): Card[] {
    return this.cardList;
  }
  getByOwnerId(ownerID: number): Card[] {
    const cards: Card[] = [];
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
