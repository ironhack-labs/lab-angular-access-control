import { Injectable } from '@angular/core';

@Injectable()
export class AccessControl {
  logMessages: Array <object> = [{
    person: String,
    message: String,
    createdAt: Date
  }]
  getAccessLog(){
    return this.logMessages;
  }
  addAccessItem(){
    let member: object = {person: String, message: String}
    this.logMessages.push(member)
  }
}
