import { Injectable } from '@angular/core';

interface User {
  person: string;
  message: string;
  createdAt: Date;
}

@Injectable()
export class AccessControlLogService {

  logMessages: Array<User> = [];

  constructor() { }

  addAccessItem( person:string, message:string) {
    this.logMessages.push({
      person,
      message,
      createdAt: new Date()
    })
    console.log(this.logMessages);
  }

  getAccessLog() {
    return this.logMessages;
  }

}
