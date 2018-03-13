import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {

  logMessages: Array<Object> = [{
    person: String,
    message: String,
    createdAt: Date
  }]

  getAccessLog():Array<Object> {
    return this.logMessages;
  }

  addAccessItem(person, message) {
    this.logMessages.push({person: person, message: message})
  }

  constructor() { }

}
