import { Injectable } from '@angular/core';
import { User } from '../user.interface';


@Injectable()
export class AccessControlLog {

  logMessages: Array<User> = [];


  constructor() { }

  getAccessLog() {
    return this.logMessages;
  }
  addAccessItem(person, message) {
    this.logMessages.push({ person, message, createdAt: new Date() });
  }

}
