import { Injectable } from '@angular/core';
import { create } from 'domain';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<object> = [];

  constructor() { }

  addAccessItem(person, message) {

    if (!person || !message) {
      return false;
    }

    const item = {
      person:  person,
      message: message,
      createdAt: new Date
  };

  this.logMessages.push(item);
  console.log(this.logMessages);

  return true;
}

getAccessLog() {
  return this.logMessages;
}

}
