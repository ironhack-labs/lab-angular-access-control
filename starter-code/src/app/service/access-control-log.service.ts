import { Injectable } from '@angular/core';

import { LogMessage } from '../models/log-message';

@Injectable()
export class AccessControlLogService {

  logMessages: LogMessage[] = [];

  constructor() { }

  addAccessItem(person, message){
    this.logMessages.push({person: person, message: message, createdAt: new Date()})
    this.getAccessLog();
  }

  getAccessLog(): LogMessage[] {
    console.log(this.logMessages)
    return this.logMessages;
  }

}
