export class UserRepository {
    userList = [];
    id = 0;
    create(...users) {
        for (let user of users) {
            if (this.isExist(user.phoneNumber)) {
                throw new Error(`User ${user.phoneNumber} already exists`);
            }
            else {
                user.setId(++this.id);
                this.userList.push({ ...user });
            }
        }
    }
    getByPhoneNumber(phoneNumber) {
        for (let user of this.userList) {
            if (user.phoneNumber === phoneNumber) {
                return user;
            }
            throw new Error("user not found");
        }
    }
    getList() {
        return this.userList;
    }
    isExist(phoneNumber) {
        for (let user of this.userList) {
            if (user.phoneNumber === phoneNumber) {
                return true;
            }
            else
                return false;
        }
    }
    getByID(id) {
        for (let user of this.userList) {
            if (user.getId() === id) {
                return user;
            }
            throw new Error(`User ${id} not found`);
        }
    }
    findIndex(fun) {
        for (let i = 0; i < this.userList.length; i++) {
            if (fun(this.userList[i], i)) {
                return i;
            }
        }
    }
    update(update) {
        const idx = this.findIndex((user) => user.getId() === update.getId());
        if (idx === undefined)
            throw new Error(`User not found`);
        this.userList[idx] = update;
    }
    delete(id) {
        const idx = this.findIndex((user) => user.getId() === id);
        if (idx == undefined)
            throw new Error(`User not found`);
        this.userList.splice(idx, 1);
    }
}
