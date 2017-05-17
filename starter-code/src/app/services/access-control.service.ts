import { Injectable } from '@angular/core';

@Injectable()
export class accessControlLog{
    logMessages: Array<any>

    constructor() {
      this.logMessages = []
    }
    addAccessItem(person:string, message:string){
      this.logMessages.push({"person":person , "message":message})
    }
    getAccessLog(): Array<any>{
      return this.logMessages
    }
}
