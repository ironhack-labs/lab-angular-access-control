import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessControlLogService {

  logMessages: Array<any> = [];

  getAccessLog() {
    return this.logMessages;
  }

  addAccessItem(person, message) {
    let newLog = {
      person,
      message,
      createdAt: Date.now()
    }
    this.logMessages.push(newLog);
  }
  constructor() { }
}
