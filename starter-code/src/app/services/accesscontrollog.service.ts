import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
    logMessages: Array<object> = [{}];

    constructor() { }

   addAccessItem (p:string, m:string):void {
    let obj = {
        person: p,
        message: m,
        createdAt: new Date
    }
    this.logMessages.push(obj);
   }

   getAccessLog(): Array<object> {
     return this.logMessages;
   }

}