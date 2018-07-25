import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<Object> = [];
  constructor() { }

  getAccessLog() {
    return this.logMessages;
  };

  addAccessItem(person, message) {
    const item = {
      person: person,
      message: message,
      createdAt: new Date
    };
    this.logMessages.push(item);
    console.log(this.logMessages);
  };

}
