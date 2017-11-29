import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLog {
  logMessages : Object[] = [];

  person: string = "";
  message: string = "";
  createdAt: Date = new Date();

  constructor() { }

  getAccesLog() {
    return this.logMessages;
  }

  addAccesItem(person, message){

    let item = {
      person: person,
      message: message,
      createdAt: new Date()
    }
    this.logMessages.push(item);
  }
}
