import { Injectable } from '@angular/core';
import { LogMessage } from '../models/logMessage';

@Injectable()
export class AccessControlLogService {
  logMessages: LogMessage[] = [];
  newLog = new LogMessage();

  constructor() { }

  getAccessLog() {
    this.logMessages.forEach(el => {
      console.log(`${el.name} logged in at ${el.createdAt} to ${el.message}`);
    });
  }

  addAccessItem(log): void {
    const newLog = new LogMessage();
    newLog.name = log.person;
    newLog.message = log.message;
    newLog.createdAt = new Date;
    this.logMessages.push(newLog);
  }

}
