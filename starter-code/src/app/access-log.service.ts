import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {

  logMessages:Array<any> = []

  getAccessLog(){
    return this.logMessages;
  }

  addAccessItem(personName, messageLogged){
    let newLog = {
      person: personName,
      message: messageLogged,
      createdAt: Date.now(),
    }
    this.logMessages.push(newLog)
  }

  constructor() { }

}
