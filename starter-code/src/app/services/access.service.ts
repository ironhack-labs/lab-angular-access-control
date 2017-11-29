import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {
  person = null;
  message = null;
  createdAt = null;

  logMessages: object[];
  // logMessages: object [] = [{
  //     person: this.person,
  //     message: this.message,
  //     createdAt: this.createdAt
  // }];

  constructor() { }

  getAccesLog() {
    return this.logMessages;
  }

  addAccesItem (person, message) {
    this.logMessages.push({
      person: person,
      message: message,
      createdAt: new Date()
    });
  }

}
