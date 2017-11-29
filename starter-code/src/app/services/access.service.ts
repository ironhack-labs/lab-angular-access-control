import { Injectable } from '@angular/core';

interface Log {
  person: string;
  message: string;
  createdAt: Date;
}

@Injectable()
export class AccessControlLog {
  logMessages: Array<Log> = [];
  constructor() { }
  getAccessLog() {
    return this.logMessages;
  }
  addAccessItem(person:string, message:string) {
    let createdAt = new Date();
    this.logMessages.push({person, message, createdAt});
    console.log(this.logMessages);
  }
}
