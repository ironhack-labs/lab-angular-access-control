import { Injectable } from '@angular/core';


interface Log {
  person:string,
  message:string,
  createdAt:Date
}


@Injectable()
export class AccessControlLogService {

  logMessages: Array<Log>=[]
  
    

  constructor() { }

  addAccessItem(person:string, message:string):void {
   this.logMessages.push({
     person:person,
     message:message,
     createdAt:new Date()
   })
  }

  getAccessLog():Array<Log> {
    return this.logMessages;
  }

}
