import { Injectable } from '@angular/core';

interface Log {
  person: string;
  message: string;
  createdAt: Date;
}

@Injectable()
export class AccessControlLog implements Log {
  constructor(public person, public message, public createdAt) { }
  logMessages: Array<Log> = [];
  getAccessLog() {
    return this.logMessages;
  }
  addAccessItem(person:string, message:string) {
    this.logMessages.push({person, message, createdAt: new Date()});
  }
}
