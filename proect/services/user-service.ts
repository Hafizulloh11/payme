import { Card } from "../entities/card";
import { User } from "../entities/user";
import { CardRepository } from "../repository/card-repository";
import { UserRepository } from "../repository/user-repository";

export class UserService extends UserRepository{
   register(...user: User[]){
    this.create(...user);
   }
   login(phoneNumber: string, password: string){
     const currentUser = this.getByPhoneNumber(phoneNumber);
     if(currentUser?.password === password){
        return currentUser;
     }
     else{
        throw new Error("Passwords do not match");
     }
   }
   // registerCard(...cards: Card[]){
   //  this.create(cards);
   // }
}