import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {
  logMessages: Array<Object>;

  constructor() { 
  }

  getAccessLog() {
    console.log(this.logMessages);
    return this.logMessages;
  }

  addAccessItem(person: string, message: string) {
    let access = {
      person,
      message,
      date: new Date()
    }
    this.logMessages.push(access);
    console.log(person);
  }
}
