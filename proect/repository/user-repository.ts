import { User } from "../entities/user";

export class UserRepository {
  private userList: User[] = [];
  private id: number = 0;
  create(...users: User[]) {
    for (let user of users) {
      if (this.isExist(user.phoneNumber)) {
        throw new Error(`User ${user.phoneNumber} already exists`);
      } else {
        user.setId(++this.id);
        this.userList.push({...user} as User);     
      }
    }
  }
  getByPhoneNumber(phoneNumber: string): User | undefined{
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
  isExist(phoneNumber: string) {
    for (let user of this.userList) {
      if (user.phoneNumber === phoneNumber) {
        return true;
      } else return false;
    }
  }
  getByID(id: number): User | undefined {
    for (let user of this.userList) {
      if (user.getId() === id) {
        return user;
      }
      throw new Error(`User ${id} not found`);
    }
  }
  findIndex(fun: (user: User, idx: number) => Boolean): number | undefined {
    for(let i = 0; i < this.userList.length; i++){
      if(fun(this.userList[i], i)){
        return i;
      }
    }
  }

  update(update: User) {
    const idx = this.findIndex((user) => user.getId() === update.getId());
    if (idx === undefined) throw new Error(`User not found`);
    this.userList[idx] = update;
  }
  delete(id: number) {
    const idx = this.findIndex((user) => user.getId() === id);
    if(idx == undefined) throw new Error(`User not found`);
    this.userList.splice(idx, 1);
  } 
}
