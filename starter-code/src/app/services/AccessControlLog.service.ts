import { Injectable } from '@angular/core';


interface SingleLog {
  person: string;
  message: string;
  createdAt: Date;
}


@Injectable()
export class AccessLog {
  logMessages: Array<SingleLog> = []
  constructor() { }

  getAccessLog() {
      console.log(this.logMessages)
  }

  addAccessTime(person, message) {
    var newLog = {
      person,
      message,
      createdAt : new Date()
    }

    this.logMessages.push(newLog);

  }
}
