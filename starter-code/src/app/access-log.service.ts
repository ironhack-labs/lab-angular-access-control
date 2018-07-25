import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {

  constructor() { }

  accessLog: Array<any> = [];

  getAccessLog(){
    return this.accessLog;
  }

  addAccessItem(person, message){
    let newLog = {
      person,
      message,
      createdAt: new Date() 
    };

    this.accessLog.push(newLog);
  }
}
