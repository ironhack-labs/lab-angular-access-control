import { Injectable } from '@angular/core';


@Injectable()
export class AccessControlLogService {

  constructor() { }

  logMessages: Array<Object> = [];

  getAccessLog() {
    return this.logMessages;
  };

  addAccessItem(person: String, message: String) {

   let logItem = {
      person: person,
      message: message,
      createdAt: new Date()
   }
    this.logMessages.push(logItem);
    return true;
    
  }

}
