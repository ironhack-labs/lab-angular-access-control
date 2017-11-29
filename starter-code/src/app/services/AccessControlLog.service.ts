import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
  logMessages: Array<Object> = [];



  addAccessItem(person: String, message: String) {
let createdAt= new Date()
    this.logMessages.push({person, message, createdAt});
      console.log(this.logMessages);

  };

  getAccessLog() {
    return this.logMessages;

  };





  constructor() { }


};
