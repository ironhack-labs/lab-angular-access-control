import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {

  logMessages: any = [
    {
      person: String,
      message: String,
      createdAt: Date
    }
  ];

  constructor() { }

  addAccessItem(logInfo: any) {
    this.logMessages.push(logInfo);
    console.log(this.logMessages);
  }

  getAccessLog() {
    const messages = this.logMessages;
    return messages;
  }

}
