import { Injectable } from '@angular/core';
@Injectable()
export class AccessControlLogService {

  logMessages: Array<any> = [
    {
      person: String,
      message: String,
      createdAt: Date,
    }
  ];

    constructor() { }

  addAccessItem(person, message){
    this.logMessages.push({person, message, createdAt: new Date().getTime()})
  }

  getAccessLog(){
    return this.logMessages;
  }
}
