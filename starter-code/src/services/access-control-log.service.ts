import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<Object> = [];

  constructor() {}

  addAccessItem(person: string, message: string): void {
    this.logMessages.push({
      person: person,
      message: message,
      createdAt: new Date()
    });
  }

  getAccessLog(): Array<Object> {
    return this.logMessages;
  }

}
