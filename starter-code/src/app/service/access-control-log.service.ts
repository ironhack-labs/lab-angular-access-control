import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
   logMessages: Array<Object> = [];

  constructor() { }
  getAccessLog(): Array<Object> {
    return this.logMessages;
  }
  addAccessItem(person:string , message:string):void{
    this.logMessages.push({
      person,
      message,
      createdAt: new Date().getTime()
    })

  }

}
