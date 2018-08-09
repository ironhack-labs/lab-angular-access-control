import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {
  logMessages: Array<Object> = [];
  constructor() { }

  getAccessLog(){
    return this.logMessages;
  }
  addAccessItem(person, message){
    this.logMessages.push({
      person,
      message,
      createdAt: new Date()
    })
    console.log('Log Messages')
    this.logMessages.forEach(e => {
      console.log(e)
    })
  }
}
