import { Injectable } from '@angular/core';
import { ILogMessage } from './i-log-message';

@Injectable()
export class AccessControlLogService {
  logMessages:Array<ILogMessage>;
  constructor() {
    this.logMessages = [];
  }
  addAccessItem(person:string, message:string){
    this.logMessages.push({person, message, createdAt: new Date()})
  }
  getAccessLog(){
    return this.logMessages;
  }
}
