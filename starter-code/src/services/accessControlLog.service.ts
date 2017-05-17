import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
    logMessages: Object[]
    constructor() {  this.logMessages = []; }

    getLAccessLog() {
      return this.logMessages;
    }
    addAccessItem(newPerson, newMessage){
        let newItem = {person: newPerson, message: newMessage, createdAt: new Date()}
        this.logMessages.push(newItem)
        console.log(this.logMessages)
    }
}
