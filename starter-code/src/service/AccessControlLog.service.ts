import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {

  logMessages : Array<any> = [{
    person: String,
    message: String,
    createdAt: new Date()
  }]
    constructor() { }

    getAccessLog() {
      return this.logMessages;
    }

    addAccessItem(person: string, message: string) {
      let member : Object = {
        person : person,
        message : message,
        createdAt : new Date()
      }
      console.log(member);
      this.logMessages.push(member);
    }
}
