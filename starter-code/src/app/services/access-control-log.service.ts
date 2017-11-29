import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages = [];

  constructor() { }

  getAccessLog() {
    this.logMessages.forEach(el => {
      console.log(`${el.person} logged in at ${el.createdAt} to ${el.message}`);
    });
  }

  addAccessItem(person, message) {
    const newLog: Object = {
      person: person,
      message: message,
      createdAt: new Date
    }
    this.logMessages.push(newLog);
  }

}
