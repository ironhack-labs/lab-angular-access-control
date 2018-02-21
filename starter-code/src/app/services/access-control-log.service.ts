import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<any> = [];
  constructor() { }

  addAccessItem(person, message) {
    this.logMessages.push({
      person,
      message,
      createdAt: new Date()
    });
  }

  getAccessLog() {
    return this.logMessages;
  }
}
