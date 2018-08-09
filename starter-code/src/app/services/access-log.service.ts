import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {

  // logInfo:  [{
  //   person: string,
  //   message: string,
  //   createdAt: Date
  // }] = [];
  
  logInfo = [];

  constructor() { }

  getAccesLog(){
    return this.logInfo;
  }

  addAccessItem(person: string, message: string){
    const newItem = { person, message, createdAt: new Date() };
    this.logInfo.push(newItem);
  }
}
