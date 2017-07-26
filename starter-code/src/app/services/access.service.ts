import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {
  logMessages: Array<{person: string, message: string, createdAt: Date}>;

  addAccessItem(_person: string, _message: string) {
    this.logMessages.push({person: _person, message: _message, createdAt: new Date()});
  }

  getAccessLog() {
    return this.logMessages;
  }
}
