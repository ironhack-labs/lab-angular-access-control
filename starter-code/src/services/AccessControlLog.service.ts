import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
    //private count: number = 0;
    logMessages: Array<any> = [{
      person: String,
      message: String,
      createdAt: new Date()
    }]

    constructor() { }

    getAccessLog() {
      return this.logMessages
    }

    addAccessItem(person: string, message: string) {
      let member: Object = {
        person: person,
        message: message
      }
      this.logMessages.push(member)
      console.log(this.logMessages);
    }
}
