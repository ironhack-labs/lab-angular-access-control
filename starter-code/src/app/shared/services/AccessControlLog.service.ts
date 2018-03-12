import { Injectable } from '@angular/core';
import { Access } from '../models/access.model';

@Injectable()
export class AccessControlLog {
  logMessages: Array<Access> = [];
  logMessage: Access;
  constructor() { }

  getAccessLog(): Array<Access> {
    return this.logMessages;
  }

  addAccessItem(person: string, message: string): void {
    this.logMessage = new Access();
    this.logMessage.person = person;
    this.logMessage.message= message;
    this.logMessage.createdAt= new Date();

    this.logMessages.push(this.logMessage);
    console.log(this.logMessages.length);
  }

  showLogsOnConsole(): void {
    this.logMessages.forEach(log => {
      console.log(log);
    });
  }

}
