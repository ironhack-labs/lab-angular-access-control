import { Injectable } from '@angular/core';

import { LogMessage } from '../models/log-message';

@Injectable()
export class AccessControlLogService {

  logMessages: LogMessage[] = [];

  constructor() { }

  addAccessItem(person, message){
    this.logMessages.push({person: person, message: message, createdAt: new Date()})
  }

  getAccessLog(): LogMessage[] {
    return this.logMessages;
  }

}
