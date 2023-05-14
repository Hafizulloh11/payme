import { Card } from "./entities/card";
import { User } from "./entities/user";
import { MainService } from "./services/main-Service";
import { UserService } from "./services/user-service";
function init() {
    const userService = new UserService();
    const mainService = new MainService();
    const user = new User("hafizulloh", "Abdusattorov", "+998970078240", "root123", false);
    const user2 = new User("tanjiro", "comado", "+998970078241", "xyz123", false);
    userService.create(user, user2);
    const currentUser = userService.login(user.phoneNumber, user.password);
    let card1 = new Card("8600 0002 0134 5235", 7777, "03/33", "UZCARD", 1000, "TBC BANK", user.getId());
    let card2 = new Card("8600 0002 0134 1359", 1111, "03/33", "UZCARD", 1000, "TBC BANK", user2.getId());
    let card3 = new Card("8600 0002 0134 0001", 3043, "11/03", "HUMO", 100000, "ANOR BANK", user2.getId());
    mainService.registerCard(card1, card2, card3);
    console.log(card1);
}
init();
