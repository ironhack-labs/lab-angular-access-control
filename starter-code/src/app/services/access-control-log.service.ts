import { Injectable } from '@angular/core';

interface USER {
  person: string;
  message: string;
  createdAt: Date;
}

@Injectable()
export class AccessControlLogService {

  logMessages: Array<USER> = [];

  constructor() { }

  addAccessItem(person: string, message: string) {
    const user: USER = {
      person, message, createdAt: new Date()
    };
    this.logMessages.push(user);
    this.getAccessLog();
  }

  getAccessLog(): Array<USER> {
    this.logMessages.forEach(e => console.log(e));
    return this.logMessages;
  }

}
