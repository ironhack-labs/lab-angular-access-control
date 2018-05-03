import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {
  logMessages: Object[] = [];


  constructor() { }

  addAccessItem(person: string, message: string) {
    const data = {
      person,
      message,
      createdAt: new Date()
    }
    this.logMessages.push(data);
  }

  getAccessLog() {
    return this.logMessages;
  }

}
