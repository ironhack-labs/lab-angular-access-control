import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {

  logMessages: Array<Object> = [];

  constructor() { }

  addAccessItem(person, message) {
    const time = new Date();
    const newLogMessage = {
      person: person,
      message: message,
      time: time
    }
    this.logMessages.push(newLogMessage);

  }
}
