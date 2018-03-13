import { Injectable } from '@angular/core';

@Injectable()
export class accessControlLog {
  logMessages: Array<Object> = [{
    person: String,
    message: String,
    createdAt: Date
  }]

  getAccessLog():Array<Object> {
    for(let i = 1; i<this.logMessages.length; i++) {
      console.log(this.logMessages[i])
    }
    return this.logMessages;
  }

  addAccessItem(person, message) {
    this.logMessages.push({person: person, message: message});
    console.log("bien")
  }

  constructor() { }
}
