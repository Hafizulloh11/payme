let counter = 0;
export class User {
  private id: number;
  constructor(public firstName: string, public lastName: string, public phoneNumber: string, public password: string, public isBlocked: Boolean = false) {}

  setId(id: number){
    this.id = id;
  }

  getId(){
    return this.id;
  }
}