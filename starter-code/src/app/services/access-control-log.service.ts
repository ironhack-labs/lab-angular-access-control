import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<{
    person: string,
    message: string,
    createdAt: Date
  }>;

  constructor() { }

  addAccessItem(person: string, message: string): void {
    let access = {
      person: person,
      message: message,
      createdAt: new Date()
    }
    this.logMessages.push(access);
  };

  getAccessLog(): Array<any> {
    return this.logMessages;
  }

}
