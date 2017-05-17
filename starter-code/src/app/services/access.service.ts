import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {
    logMessages:Array<Object>=[]
    newLog: Object = { };

    constructor() { }

    addAccessItem(person,message):void{
     this.newLog["person"] = person
     this.newLog["message"] = message
     this.newLog["Date"] = new Date()
     this.logMessages.push(this.newLog);
     this.newLog = {};
    }

    getAccessLog():Array<Object>{
    console.log(this.logMessages)
    return this.logMessages;
    }
}
