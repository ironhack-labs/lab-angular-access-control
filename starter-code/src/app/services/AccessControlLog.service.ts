import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
  logMessages: Array<Object> = [{
    person: String,
    message: String,
    createdAt: Date
  }];

  addAccessItem(person: String, message: String) {

  };

  gesAccessLog() {
    return this.logMessages;

  };


  constructor() { }


};
