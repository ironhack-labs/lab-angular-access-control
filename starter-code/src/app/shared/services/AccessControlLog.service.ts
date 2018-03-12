import { Injectable } from '@angular/core';
import { Access } from '../models/access.model';

@Injectable()
export class AccessControlLog {
  logMessages: Array<Access> = [];
  constructor() { }

  getAccessLog(): Array<Access> {
    return this.logMessages;
  }

  addAccessItem(person: string, message: string): void {
    const newAccess = {
      person: person,
      message: message,
      createdAt: new Date()
    }
    console.log(`Message created: person= ${newAccess.person} message= ${newAccess.message} createdAt= ${newAccess.createdAt}`);
    this.logMessages.push(newAccess);
  }

}
