import { Injectable } from '@angular/core';
import { IAccess } from '../interfaces/IAccess';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<IAccess> = [];

  constructor() { }

  addAccessItem(person: string, message: string) {
    let logMessage: IAccess = {person: person, message: message, createdAt: new Date()};
    this.logMessages.push(logMessage);
  }

  getAccessLog() {
    return this.logMessages;
  }
}
