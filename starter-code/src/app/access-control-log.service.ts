import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<Object> = [
    {
      person: "Alex",
      message: "changing clothes",
      createdAt: new Date()
    },
    {
      person: "Jone",
      message: "changing clothes",
      createdAt: new Date()
    }
  ]

  constructor() { }

  getAccessLog() {
    return this.logMessages;
  }

  addAccessItem(newLog) {
    this.logMessages.push(newLog);

    // console.log(this.logMessages);

    this.logMessages.forEach(log)

    function log (log) {
      console.log(`Name: ${log.person} Message: ${log.message} CreatedAt: ${log.createdAt}`);
    }
  }

}
