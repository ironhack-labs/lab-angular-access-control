import { Injectable } from '@angular/core';
import { Message } from '_debugger';

@Injectable()
export class AccessService {
  logMessages: Array<Object> = [];

  constructor() { }

  getAccessLog(): Array<Object> {
    return this.logMessages;
  }

  addAccessItem(person, message) {
    const newContact: Object = {
      person,
      message,
      createdAt: new Date()
    };
    this.logMessages.push(newContact);
  }
}
