import { Injectable } from '@angular/core';

interface logObject {
  person: string,
  message: string,
  createdAt: Date
}

@Injectable()
export class AccessControlLogService {
  logMessages: logObject[] = [];
  logRecord: logObject;
  constructor() { }

  getAccessLog() {
    this.logMessages.forEach((message) => {
      console.log(`${message.person}: "${message.message}"`);
    });
  }

  addAccessItem(person, message) {
    let newLogRecord = {
      person: person,
      message: message,
      createdAt: new Date()
    }
    this.logMessages.push(newLogRecord);
    this.getAccessLog();
  }

}
