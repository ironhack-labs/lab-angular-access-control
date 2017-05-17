import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
    logMessages: Array<any> = [];

    constructor() { }

    getAccessLog():Array<Object> {
      return this.logMessages;
    }

    addAccessItem(person:string, message:string):void{
      this.logMessages.push({
        person: person,
        message: message,
        createdAt: new Date()
      });
    }

}
