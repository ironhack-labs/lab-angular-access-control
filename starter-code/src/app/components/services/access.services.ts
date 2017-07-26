import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {

  // logMessages: Array<{person: string, message: string, createdAt: Date}>;
  logMessages: Object[] = [];
  newMessage: {
    person: string,
    message: string,
    createdAt: Date,
  }

  constructor() {}

  addAccessItem(logPerson, logMessage) {
    console.log('Message received and understood', logPerson, logMessage);
    this.newMessage = {
      person: logPerson,
      message: logMessage,
      createdAt: new Date(),
    }
    console.log('newMessage', this.newMessage);
    this.logMessages.push(this.newMessage);
  }

  getAccessLog() {
    return this.logMessages;
  }
}
