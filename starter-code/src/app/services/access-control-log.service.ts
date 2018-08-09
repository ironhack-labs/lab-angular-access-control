import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages = [
    {
      person: "Borja",
      message: "showering",
      createdAt: Date.now(),
    },
    {
      person: "Anna",
      message: "brush",
      createdAt: Date.now(),
    },
    {
      person: "Thor",
      message: "shaving",
      createdAt: Date.now(),
    },
  ];

  constructor() { }

  getAccessLog() {
    return this.logMessages;
  }

  addAccessItem(log) {
    this.logMessages.push(log);
    this.logMessages.forEach(log => {
      console.log(`person: ${log.person}, message: ${log.message}`);
    })
  }

}
