import { Injectable } from '@angular/core';



@Injectable()
export class AccessControlLogService {
    logMessages: Array<Object> = [
      {
        person: String,
        message: String,
        createdAt: Date
    }
  ]


    constructor() { }



    addAccessItem(person, message) {
          this.logMessages.push ( {
            person,
            message,
            createdAt: new Date()
          });
    }

  getAccessLog() {
    return this.logMessages;
  }



}
