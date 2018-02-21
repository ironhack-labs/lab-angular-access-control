import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  constructor() { }
  logMessages: Array<object> = [{
    person: String,
    message: String,
    createdAt: Date
  }]
  getAccessLog() {
    return this.logMessages;
  }
  addAccessItem(person, message) {
    const t = { person, message, createdAt: Date.now() }
    this.logMessages.push(t);
    console.log(this.getAccessLog())
  }
}
