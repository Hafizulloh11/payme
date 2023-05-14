import { CARD_TYPE } from "./types";

export class Card {
    id: number;
    constructor(public number: string, public password: number, public expiry: string, public card: CARD_TYPE, public balance: number, public bankName: string, public ownerID: number) {  
    }
    setId(cardID: number){
     this.id = cardID;   
    }
    getId(){
        return this.id;
    }
}