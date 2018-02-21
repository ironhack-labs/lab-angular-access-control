import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  // Array<Object> but we use 'any' to avoid eslint correction
  logMessages: any = [{
      person: String,
      message: String,
      createdAt: Date
    }];

  constructor() { }

  addAccessItem(person: String, message: String) {
    this.logMessages.person = person;
    this.logMessages.message = message;
    console.log(this.logMessages);
  }

  getAccessLog(): Array<Object> {
    return this.logMessages;
  }


}
