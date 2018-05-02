import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<Object> = [];
  person: string;
  message: string;
  createdAt: Date;

  constructor() { }

  addAccessItem( person:string, message:string) {
    this.logMessages.push({
      person,
      message,
      createdAt: new Date()
    })
  }

  getAccessLog() {
    return this.logMessages;
  }

}
