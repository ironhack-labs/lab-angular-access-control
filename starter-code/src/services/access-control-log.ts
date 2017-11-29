import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {

  logMessages: Array<Object> = [
    {
      person:String,
      message:String,
      createdAt:Date
    },
  ];

  constructor() { }

  addAccessItem(person, message):void {
    this.logMessages.push({
      person: person,
      message: message
    });
  }

  getAccessLog(): Array<Object> {
    return this.logMessages;
  }

}
