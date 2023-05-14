import { UserRepository } from "../repository/user-repository";
export class UserService extends UserRepository {
    register(...user) {
        this.create(...user);
    }
    login(phoneNumber, password) {
        const currentUser = this.getByPhoneNumber(phoneNumber);
        if (currentUser?.password === password) {
            return currentUser;
        }
        else {
            throw new Error("Passwords do not match");
        }
    }
}
