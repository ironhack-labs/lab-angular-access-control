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
    return this.logMessages;
  }

  addAccessItem(person, message) {
    let newLogRecord = {
      person: person,
      message: message,
      createdAt: new Date()
    }
    this.logMessages.push(newLogRecord);
  }

}
