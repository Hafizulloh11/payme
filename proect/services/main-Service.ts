import { Card } from "../entities/card";
import { User } from "../entities/user";
import { CardRepository } from "../repository/card-repository";
import { UserRepository } from "../repository/user-repository";

export class MainService{
   private cartRepository =  new CardRepository();
   private userRepository = new UserRepository();
   
   register(...user: User[]){
    this.userRepository.create(...user);
   }
   login(phoneNumber: string, password: string){
     const currentUser = this.userRepository.getByPhoneNumber(phoneNumber);
     if(currentUser?.password === password){
        return currentUser;
     }
     else{
        throw new Error("Passwords do not match");
     }
   }
   registerCard(...cards: Card[]){
    this.cartRepository.create(...cards);
   }
}