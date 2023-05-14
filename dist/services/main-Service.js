import { CardRepository } from "../repository/card-repository";
import { UserRepository } from "../repository/user-repository";
export class MainService {
    cartRepository = new CardRepository();
    userRepository = new UserRepository();
    register(...user) {
        this.userRepository.create(...user);
    }
    login(phoneNumber, password) {
        const currentUser = this.userRepository.getByPhoneNumber(phoneNumber);
        if (currentUser?.password === password) {
            return currentUser;
        }
        else {
            throw new Error("Passwords do not match");
        }
    }
    registerCard(...cards) {
        this.cartRepository.create(...cards);
    }
}
