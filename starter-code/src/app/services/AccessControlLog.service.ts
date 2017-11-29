import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
  logMessages: Array<Object> = [
  { person:String, message:String, createdAt:Date },
  ];
    constructor() { }

  getAccessLog():Array<object> {
    return this.logMessages;
  }
  addAccessItem(person, message){}
}
