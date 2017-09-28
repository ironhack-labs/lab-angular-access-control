export class UserLog {
  person:string;
  message:string;
  createdAt:Date;

  constructor(person: string, message: string) {
    this.person = person;
    this.message = message;
    this.createdAt = new Date();
  }
}
