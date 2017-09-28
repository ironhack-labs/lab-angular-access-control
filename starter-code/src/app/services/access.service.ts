import { Injectable } from '@angular/core';

@Injectable()
export class AccessService {

  logMessages: any[] = [];

  constructor() { }

  addAccessItem(person, message) {
    this.logMessages.push({
      person: person,
      message: message,
      createdAt: Date()
    });

    this.logMessages.forEach(function(oneMessage) {
      console.log(oneMessage);
    });
  }

  getAccessLog() {

  }
}
