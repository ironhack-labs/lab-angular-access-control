import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {
  logMessages: Array<any> = [];
  constructor() { }
  addAccessItem(person, message) {
    const newTime = new Date();
    const newLog = {
      person: person,
      message: message,
      time: newTime
    }
    this.logMessages.push(newLog);
    console.log(this.logMessages);
    // console.log(newLog);
  }
  getAccessLog() {
    return this.logMessages;
  }
}
