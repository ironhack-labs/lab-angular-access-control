import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {

  logMessages: Array<object> = [];
  newObject = {};
  date: any;

  constructor() { }

  addAccessItem(person: string, message: string) {
    this.date = new Date();

    this.newObject = {person, message, date: this.date};
    // Date missing
    this.logMessages.push(this.newObject);
    this.newObject = {};
  }

  getAccessLog() {
    return this.logMessages;
  }

}
