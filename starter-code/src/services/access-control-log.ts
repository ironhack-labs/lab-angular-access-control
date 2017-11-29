import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {

  logMessages: Array<Object> = [];

  constructor() { }

  addAccessItem(person, message):void {
    this.logMessages.push({
      person: person,
      message: message,
      createdAt: new Date()
    });
    alert('Person and message registed correctly!')
    this.getAccessLog();
  }

  getAccessLog(): Array<Object> {
    console.log(this.logMessages);
    return this.logMessages;
  }

}
