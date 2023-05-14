let counter = 0;
export class User {
    firstName;
    lastName;
    phoneNumber;
    password;
    isBlocked;
    id;
    constructor(firstName, lastName, phoneNumber, password, isBlocked = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.isBlocked = isBlocked;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
}
