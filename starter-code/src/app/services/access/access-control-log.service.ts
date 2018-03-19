import { Injectable } from '@angular/core';

interface LogMessages {
  person: string;
  message: string;
  createdAt: Date;
}

@Injectable()
export class AccessControlLogService {

  logMessages: Array<LogMessages> = [];

  constructor() { }

  addAccessItem(person, message) {
    this.logMessages.push({
      person: person,
      message: message,
      createdAt: new Date(),
    });
  }

  getAccessLog() {
    this.logMessages.forEach((element, index) => {
      console.log(`${index}. Person: ${element.person} | Message: ${element.message}`);
      return element;
    });
  }
}
