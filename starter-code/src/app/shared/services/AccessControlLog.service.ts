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
    this.logMessages.push(newAccess);
  }

}
