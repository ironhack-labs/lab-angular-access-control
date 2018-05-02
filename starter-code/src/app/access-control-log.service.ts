import { Injectable } from '@angular/core';

interface LogMessages{
  person: string;
  message: string;
  createdAt: string;
}

@Injectable()
export class AccessControlLogService {
  logMessages: Array<Object> = [];
  constructor() { }

  touch(person, message, createdAt) {
    this.logMessages.push({person, message, createdAt})
  }

getAccessLog() {
  return this.logMessages;
}

addAccessItem(person, message) {
this.logMessages.push({person, message})
}


}
