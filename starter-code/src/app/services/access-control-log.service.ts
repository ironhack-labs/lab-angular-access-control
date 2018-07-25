import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Object[] = [];

  newAccess: Object = {
    person: String,
    message: String,
    createdAt: Date
  };

  constructor() { }

  addAccessItem(person, message) { // Does this function need the return?????
    this.newAccess = {
      person: person,
      message: message,
      createdAt: new Date()
    };
    this.logMessages.push(this.newAccess);
    console.log('Registration successful');
    this.getAccessLog();
  }

  getAccessLog() {
    console.log(this.logMessages);
    return this.logMessages;
  }
}
