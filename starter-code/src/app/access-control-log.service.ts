import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<{person: string, message: string, createdAt: Date}> = [];
  
  constructor() { }

  addAccessItem(person: string, message: string): any {
      this.logMessages.push({person: person, message: message, createdAt: new Date})
  }

  getAccessLog() {
    return this.logMessages
  }
}
